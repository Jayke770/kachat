import { io } from 'socket.io-client'
export default function Ws() {
    const socket = io('http://localhost:3001')
    return { socket }
}