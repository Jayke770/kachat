import Head from "next/head"
import LoginForm from '../../../components/Login'
import { getSession } from 'next-auth/react'
export default function Login() {
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
        destination: '/'
      },
    }
  } else {
    return {
      props: {}
    }
  }
}