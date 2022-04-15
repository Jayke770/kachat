import Head from 'next/head'
import SignupForm from '../../../components/SignUp'
import { getSession } from 'next-auth/react'
export default function SignUp() {
    return (
        <>
            <Head>
                <title>Getting started with KaChat</title>
            </Head>
            <SignupForm />
        </>
    )
}
export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    if (session) {
        return {
            redirect: {
                destination: '/'
            },
        }
    } else {
        return {
            props: {}
        }
    }
}