import "aos/dist/aos.css"
import '../styles/globals.css'
import 'animate.css'
import { App } from "konsta/react"
import { useEffect, useState } from "react"
import AOS from "aos"
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'
import Theme from "../lib/Theme/setTheme"
export default function Kachat({ Component, pageProps: { session, ...pageProps } }) {
  const { theme } = Theme()
  const [currentTheme, setcurrentTheme] = useState('material')
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    })
    setcurrentTheme(theme)
  }, [])
  console.log(currentTheme)
  return (
    <SessionProvider session={session}>
      <NextNProgress
        height={4}
        startPosition={0.2}
        options={{ easing: "ease", speed: 500 }} />
      <App theme={currentTheme} dark safeAreas>
        <Component {...pageProps} />
      </App>
    </SessionProvider>
  )
}
