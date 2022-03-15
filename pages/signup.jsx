import { Page } from "konsta/react"
import Head from 'next/head'
import SignupForm from '../components/SignUp'
export default function SignUp() {
    return (
        <Page>
            <Head>
                <title>Getting started with KaChat</title>
            </Head>
            <SignupForm/>
        </Page>
    )
}