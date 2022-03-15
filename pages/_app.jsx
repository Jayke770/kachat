import "aos/dist/aos.css"
import '../styles/globals.css'
import 'animate.css'
import { App } from "konsta/react"
import { useEffect } from "react"
import AOS from "aos"
import NextNProgress from 'nextjs-progressbar'
export default function Kachat({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, [])
  return (
    <>
      <NextNProgress
        color="#0066d6"
        height={3}
        startPosition={0.2}
        options={{ easing: "ease", speed: 500 }} />
      <App className="" theme="material" dark safeAreas>
        <Component {...pageProps} />
      </App>
    </>
  )
}
