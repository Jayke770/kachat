import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from "../../../lib/mongodb"
import Users from '../../../lib/Users'
import moment from "moment"
import { nanoid } from 'nanoid'
import { uniqueNamesGenerator as generateUsername, adjectives, colors, animals } from 'unique-names-generator'
import { ObjectId } from "mongodb"
export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 15 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    callbacks: {
        async session({ session, user, token }) {
            if (session) {
                session.user.id = token.sub
            }
            return session
        }
    },
    events: {
        async signIn({ user, account, profile, isNewUser }) {
            if (isNewUser) {
                const username = `${generateUsername({ dictionaries: [adjectives, colors, animals], length: 2 })}-${nanoid(3)}`
                await Users.updateOne({ _id: { $eq: ObjectId(user.id) } }, {
                    $set: {
                        emailVerified: true,
                        username: username,
                        status: 1,
                        lastSeen: moment().format(),
                        created: moment().format()
                    }
                })
            } else {
                await Users.updateOne({ _id: { $eq: ObjectId(user.id) } }, {
                    $set: {
                        lastSeen: moment().format(),
                        status: 1
                    }
                })
            }
        },
        async signOut({ session, token }) {
            await Users.updateOne({ _id: { $eq: ObjectId(token.sub) } }, {
                $set: {
                    lastSeen: moment().format(),
                    status: 0
                }
            })
        }
    },
    pages: {
        signIn: '/auth/login',
        signOut: '/'
    }
})