import { useState, useEffect } from 'react'
import { useBetween } from "use-between"
const SetTheme = () => {
    const [theme, settheme] = useState('material')
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme')
        if (currentTheme === null) {
            localStorage.setItem('theme', 'material')
            settheme('material')
        } else {
            localStorage.setItem('theme', currentTheme)
            settheme(currentTheme)
        }
    }, [])
    const updatetheme = (val) => {
        localStorage.setItem('theme', val)
        settheme(val)
        window.location.reload(true)
    }
    return { theme, updatetheme }
}
const Theme = () => useBetween(SetTheme)
export default Theme