import { useState, useEffect } from 'react'
import { Popover, List, ListItem, Preloader, Checkbox } from "konsta/react"
import { signOut } from 'next-auth/react'
import Mode from '../../lib/Theme/setDarkmode'
export default function Menu({ menu, setmenu }) {
    const { thememode, updatethememode } = Mode()
    const [darkmode, setdarkmode] = useState('')
    const [signout, setsignout] = useState(false)
    const changemode = (val) => {
        setdarkmode(val)
        updatethememode(val)
    }
    useEffect(() => {
        setdarkmode(thememode)
    }, [darkmode, thememode])
    return (
        <Popover
            opened={menu}
            target=".menu"
            onBackdropClick={() => setmenu(false)}>
            <List
                hairlines={false}
                colors={{ bg: 'bg-transparent' }}
                nested>
                <ListItem
                    after={
                        <Checkbox
                            checked={darkmode === 'dark'}
                            onChange={() => changemode(thememode === 'dark' ? 'default' : 'dark')} />
                    }
                    chevron={false}
                    title="Dark Mode"
                    link
                    className='dark:text-neutral-300'
                    onClick={() => changemode(thememode === 'dark' ? 'default' : 'dark')}
                />
                <ListItem
                    title="Logout"
                    link
                    chevronIcon={signout && <Preloader size='w-6 h-6' />}
                    onClick={() => {
                        if (!signout) {
                            setsignout(true)
                            signOut()
                        }
                    }}
                    className='dark:text-neutral-300'
                />
            </List>
        </Popover >
    )
}