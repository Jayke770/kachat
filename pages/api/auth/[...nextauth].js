import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
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
        signIn: '/auth/login'
    }
})