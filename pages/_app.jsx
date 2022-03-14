import "aos/dist/aos.css"
import '../styles/globals.css'
import { App } from "konsta/react"
import { useEffect } from "react"
import AOS from "aos"
export default function Kachat({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <App theme="material" dark safeAreas>
      <Component {...pageProps} />
    </App>
  )
}
