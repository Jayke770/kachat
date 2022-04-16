import { useState, useEffect } from 'react'
import { useBetween } from "use-between"

const Setthememode = () => {
    const [thememode, setthememode] = useState('default')
    useEffect(() => {
        const mode = localStorage.getItem('theme-mode')
        if (mode === null) {
            localStorage.setItem('theme-mode', 'default')
            document.querySelector('html').classList.add('default')
            document.querySelector("meta[name='theme-color']").setAttribute('content', '#0066d6')
            setthememode('default')
        } else {
            localStorage.setItem('theme-mode', mode)
            document.querySelector("meta[name='theme-color']").setAttribute('content', mode === 'dark' ? '#202020' : '#0066d6')
            mode === 'dark' ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
            setthememode(mode)
        }
    }, [])
    const updatethememode = (val) => {
        localStorage.setItem('theme-mode', val)
        document.querySelector("meta[name='theme-color']").setAttribute('content', val === 'dark' ? '#202020' : '#0066d6')
        val === 'dark' ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
        setthememode(val)
    }
    return { thememode, updatethememode }
}
const Mode = () => useBetween(Setthememode)
export default Mode