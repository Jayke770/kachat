import { Button } from "konsta/react"
export default function Main({signOut, user}) {
    console.log(signOut, user)
    return (
        <>
            <Button onClick={() => signOut('google')}>Sign Out</Button>
        </>
    )
}