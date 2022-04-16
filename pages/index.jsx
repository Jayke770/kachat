import { useState } from 'react'
import { Tabbar, TabbarLink } from 'konsta/react'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
export default function Index({ data: { user } }) {
    const [tab, settab] = useState('posts')
    return (
        <>
            <Head>
                <title>KaChat</title>
            </Head>

            {/* Navigation */}
            <Navigation user={user} />

            {/* Main */}
            <div className='transition-all grid w-full h-[calc(100vh-104px)] lg:h-[calc(100vh-64px)] lg:grid-cols-4 overflow-hidden'>
                <div
                    className={`${tab === 'find friends' ? 'flex animate__animated animate__fadeIn' : 'hidden'} lg:flex w-full h-full bg-blue-700 justify-center items-center`}>
                    Find Friends
                </div>
                <div
                    className={`${tab === 'posts' ? 'flex animate__animated animate__fadeIn' : 'hidden'} w-full h-full bg-amber-700 justify-center items-center lg:col-span-2`}>
                    Posts
                </div>
                <div
                    className={`${tab === 'friends' ? 'flex animate__animated animate__fadeIn' : 'hidden'} lg:flex w-full h-full bg-rose-700 justify-center items-center`}>
                    Friends
                </div>
            </div>

            {/* Tabbar only visible when media width is less than 1024px */}
            <Tabbar
                className='transition-all fixed bottom-0 lg:hidden'>
                <TabbarLink
                    onClick={() => settab('find friends')}
                    active={tab === 'find friends'}
                    label="Find Friends" />
                <TabbarLink
                    onClick={() => settab('posts')}
                    active={tab === 'posts'}
                    label="Posts" />
                <TabbarLink
                    onClick={() => settab('friends')}
                    active={tab === 'friends'}
                    label="Friends" />
            </Tabbar>
        </>
    )
}
export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    if (session) {
        return {
            props: {
                data: session
            }
        }
    } else {
        return {
            redirect: {
                destination: '/auth/login'
            },
            props: {}
        }
    }
}