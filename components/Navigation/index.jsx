import { useState } from 'react'
import { Navbar, Link, Icon } from 'konsta/react'
import { ArrowtriangleDownCircleFill, ChatBubbleTextFill, BellFill } from 'framework7-icons/react'
import NextLink from 'next/link'
import Menu from './menu'
export default function Navigation() {
    const [menu, setmenu] = useState({ target: undefined, opened: false })
    return (
        <>
            <Navbar
                left={
                    <NextLink href='/'>
                        <Link navbar>KaChat</Link>
                    </NextLink>
                }
                right={
                    <>
                        <Link navbar>
                            <Icon badge={2} badgeColors={{ bg: "bg-red-500" }}>
                                <ChatBubbleTextFill className="w-7 h-7" />
                            </Icon>
                        </Link>
                        <Link navbar>
                            <Icon badge={1} badgeColors={{ bg: "bg-red-500" }}>
                                <BellFill className="w-7 h-7" />
                            </Icon>
                        </Link>
                        <Link
                            navbar
                            className='menu'
                            onClick={() => setmenu({ target: '.menu', opened: true })}>
                            <Icon badge={1} badgeColors={{ bg: "bg-red-500" }}>
                                <ArrowtriangleDownCircleFill className="w-7 h-7" />
                            </Icon>
                        </Link>
                    </>
                } />

            {/* Menu */}
            <Menu
                data={{ target: menu.target, opened: menu.opened }}
                setmenu={setmenu} />
        </>
    )
}