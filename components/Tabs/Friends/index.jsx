import { Card } from 'konsta/react'
export default function Friends({ tab }) {
    return (
        <div
            className={`${tab === 'friends' ? 'flex animate__animated animate__fadeIn' : 'hidden'} lg:flex w-full h-[calc(100vh-104px)] lg:h-[calc(100vh-64px)] bg-rose-700 justify-center items-center`}>
            <Card>

            </Card>
        </div>
    )
}