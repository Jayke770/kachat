import Head from "next/head"
import LoginForm from '../../../components/Login'
import { getSession } from 'next-auth/react'
import Theme from '../../../lib/Theme/setTheme'
import Mode from '../../../lib/Theme/setDarkmode'
export default function Login() {
  const { theme, updatetheme } = Theme()
  const { thememode, updatethememode } = Mode()
  return (
    <>
      <Head>
        <title>Welcome to KaChat - Create or login your account</title>
      </Head>
      <LoginForm />
    </>
  )
}
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  if (session) {
    return {
      redirect: {
        destination: '/home'
      },
    }
  } else {
    return {
      props: {}
    }
  }
}