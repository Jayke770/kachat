import Head from "next/head"
import { Page, Card, Block } from "konsta/react"
import Main from '../components/Main'
export default function Index() {
  return (
    <Page>
      <Head>
        <title>Welcome to KaChat - Create or login your account</title>
      </Head>
      <Main/>
    </Page>
  )
}