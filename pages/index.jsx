import { useState } from 'react'
import { Tabbar, TabbarLink } from 'konsta/react'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { SearchCircle, Search, Person2Fill, LayersFill } from 'framework7-icons/react'
import Navigation from '../components/Navigation'
import FindFriends from '../components/Tabs/FindFriends'
import Posts from '../components/Tabs/Posts'
import Friends from '../components/Tabs/Friends'
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
            <div className='transition-all grid w-full lg:grid-cols-4'>
                <FindFriends tab={tab} />
                <Posts tab={tab} user={user} />
                <Friends tab={tab} />
            </div>

            {/* Tabbar only visible when media width is less than 1024px */}
            <Tabbar
                className='transition-all fixed bottom-0 lg:hidden'>
                <TabbarLink
                    onClick={() => settab('find friends')}
                    active={tab === 'find friends'}
                    label={<Search className="w-7 h-7" />} />
                <TabbarLink
                    onClick={() => settab('posts')}
                    active={tab === 'posts'}
                    label={<LayersFill className="w-7 h-7" />} />
                <TabbarLink
                    onClick={() => settab('friends')}
                    active={tab === 'friends'}
                    label={<Person2Fill className="w-7 h-7" />} />
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