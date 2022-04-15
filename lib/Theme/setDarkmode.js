import { useState, useEffect } from 'react'
import { useBetween } from "use-between"

const Setthememode = () => {
    const [thememode, setthememode] = useState('default')
    useEffect(() => {
        const mode = localStorage.getItem('theme-mode')
        if (mode === null) {
            localStorage.setItem('theme-mode', 'default')
            document.querySelector('html').classList.add('default')
            setthememode('default')
        } else {
            localStorage.setItem('theme-mode', mode)
            mode === 'dark' ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
            setthememode(mode)
        }
    }, [])
    const updatethememode = (val) => {
        localStorage.setItem('theme-mode', val)
        val === 'dark' ? document.querySelector('html').classList.add('dark') : document.querySelector('html').classList.remove('dark')
        setthememode(val)
    }
    return { thememode, updatethememode }
}
const Mode = () => useBetween(Setthememode)
export default Mode