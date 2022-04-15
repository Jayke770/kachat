import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
export default function Index(data) {
    return (
        <>
            <Head>
                <title>KaChat</title>
            </Head>

            {/* Navigation */}
            <Navigation />
        </>
    )
}
export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    if (session) {
        return {
            props: {
                data: session
            }
        }
    } else {
        return {
            redirect: {
                destination: '/auth/login'
            },
            props: {}
        }
    }
}