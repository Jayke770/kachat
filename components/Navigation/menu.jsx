import { useState, useEffect } from 'react'
import { Panel, List, ListItem, Toggle, Navbar, Link, BlockTitle, Radio } from "konsta/react"
import { Xmark } from 'framework7-icons/react'
import Theme from '../../lib/Theme/setTheme'
import Mode from '../../lib/Theme/setDarkmode'
export default function Menu({ menu, setmenu }) {
    const { theme, updatetheme } = Theme()
    const { thememode, updatethememode } = Mode()
    const [darkmode, setdarkmode] = useState('')
    const changemode = (val) => {
        setdarkmode(val)
        updatethememode(val)
    }
    useEffect(() => {
        setdarkmode(thememode)
    }, [])
    return (
        <Panel
            opened={menu}
            onBackdropClick={() => setmenu(false)}
            colors={{ bg: 'bg-gray-200 dark:bg-black' }}
            side="right"
            size='w-96 h-screen'>
            <div className="dark:bg-page-material-dark bg-gray-200 h-full">
                <Navbar
                    title='Menu'
                    right={
                        <Link
                            navbar
                            onClick={() => setmenu(false)}>
                            <Xmark className="w-6 h-6 text-red-500" />
                        </Link>
                    } />

                <BlockTitle className='!mt-3 dark:text-neutral-200'>Theme</BlockTitle>
                <List inset className='!mb-2'>
                    <ListItem
                        media={
                            <Radio
                                checked={theme === 'ios'}
                                onChange={() => updatetheme('ios')} />
                        }
                        chevron={false}
                        title="iOS Theme"
                        link
                        className='dark:text-neutral-300'
                        onClick={() => updatetheme('ios')}
                    />
                    <ListItem
                        media={
                            <Radio
                                checked={theme === 'material'}
                                onChange={() => updatetheme('material')} />
                        }
                        chevron={false}
                        title="Material Theme"
                        link
                        className='dark:text-neutral-300'
                        onClick={() => updatetheme('material')}
                    />
                </List>
                <List inset className='!mt-3'>
                    <ListItem
                        after={
                            <Toggle
                                checked={darkmode === 'dark'}
                                onChange={() => changemode(thememode === 'dark' ? 'default' : 'dark')} />
                        }
                        chevron={false}
                        title="Dark Mode"
                        link
                        className='dark:text-neutral-300'
                        onClick={() => changemode(thememode === 'dark' ? 'default' : 'dark')}
                    />
                </List>
            </div>
        </Panel>
    )
}