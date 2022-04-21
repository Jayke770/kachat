import "aos/dist/aos.css"
import '../styles/globals.css'
import 'animate.css'
import { App } from "konsta/react"
import { useEffect } from "react"
import AOS from "aos"
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'
export default function Kachat({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    })
  }, [])
  return (
    <SessionProvider session={session}>
      <NextNProgress
        height={4}
        startPosition={0.2}
        options={{ easing: "ease", speed: 500 }} />
      <App theme="material" dark safeAreas>
        <Component {...pageProps} />
      </App>
    </SessionProvider>
  )
}
