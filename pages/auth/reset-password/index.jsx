import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Reset from '../../../components/Reset'
export default function ResetPassword() {
    return (
        <>
            <Head>
                <title>Reset your password</title>
            </Head>
            <Reset />
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