import { Block } from 'konsta/react'
export default function FindFriends({ tab }) {
    return (
        <div
            className={`${tab === 'find friends' ? 'flex animate__animated animate__fadeIn' : 'hidden'} lg:flex bg-teal-800 flex-col w-full h-[calc(100vh-104px)] lg:h-[calc(100vh-64px)]`}>
            <span>Find Friends</span>
        </div>
    )
}