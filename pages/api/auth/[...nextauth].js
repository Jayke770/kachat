import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from "next-auth/providers/github"
import Credentials from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from "../../../lib/mongodb"
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
        }),
        Credentials({
            async authorize(credentials, req) {

            }
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
    pages: {
        signIn: '/'
    }
})