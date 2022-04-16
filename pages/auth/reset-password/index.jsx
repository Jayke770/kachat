import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Reset from '../../../components/Reset'
import Theme from '../../../lib/Theme/setTheme'
import Mode from '../../../lib/Theme/setDarkmode'
export default function ResetPassword() {
    const { theme, updatetheme } = Theme()
    const { thememode, updatethememode } = Mode()
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