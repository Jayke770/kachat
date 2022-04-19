import { io } from 'socket.io-client'
export default async function Ws() {
    const socket = await io('http://localhost:3001')
    return { socket }
}