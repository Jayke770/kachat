import { getSession } from 'next-auth/react'
export default function Index() {
    return (
        <div>
            Not Yet Available
        </div>
    )
}
export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    if (session) {
        return {
            redirect: {
                destination: '/home'
            }
        }
    } else {
        return {
            redirect: {
                destination: '/auth/login'
            }
        }
    }
}