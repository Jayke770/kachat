import Head from 'next/head'
import SignupForm from '../../../components/SignUp'
import { getSession } from 'next-auth/react'
import Theme from '../../../lib/Theme/setTheme'
import Mode from '../../../lib/Theme/setDarkmode'
export default function SignUp() {
    const { theme, updatetheme } = Theme()
    const { thememode, updatethememode } = Mode()
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