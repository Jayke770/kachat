import { useState } from 'react'
import { Navbar, Link, Icon } from 'konsta/react'
import { ChatBubbleTextFill, BellFill, Bars } from 'framework7-icons/react'
import NextLink from 'next/link'
import Menu from './menu'
export default function Navigation({ user }) {
    const [menu, setmenu] = useState(false)
    return (
        <>
            <Navbar
                left={
                    <NextLink href="/" passHref>
                        <Link navbar>KaChat</Link>
                    </NextLink>
                }
                right={
                    <>
                        <NextLink href={user.id} passHref>
                            <Link navbar>
                                <div className='flex gap-1 items-center'>
                                    <img
                                        className='object-cover h-8 w-12 rounded-full'
                                        src={user.image}
                                        alt='user profile' />
                                </div>
                            </Link>
                        </NextLink>
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
                            onClick={() => setmenu(true)}>
                            <Icon badge={1} badgeColors={{ bg: "bg-red-500" }}>
                                <Bars className="w-7 h-7" />
                            </Icon>
                        </Link>
                    </>
                } />

            {/* Menu */}
            <Menu
                menu={menu}
                setmenu={setmenu} />
        </>
    )
}