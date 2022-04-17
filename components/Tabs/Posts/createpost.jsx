import { Card } from "konsta/react"
export default function CreatePost() {
    return (
        <div
            className="createpost animate__animated ms-500 fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 duration-400 hidden justify-center items-center p-3 transition-all"
            onClick={(e) => {
                //hide create post
                if (e.target.classList.contains('createpost') && e.target.classList.contains('flex')) {
                    e.target.classList.add("animate__fadeOut")
                    setTimeout(() => {
                        e.target.classList.remove("flex", "animate__fadeOut")
                        e.target.classList.add("hidden")
                    }, 500)
                }
            }}>
            <Card
                margin="m-0"
                className='animate__animated animate__fadeInUp ms-500 w-full sm:w-[600px] !rounded-lg'>
                <div className="flex justify-center items-center">
                    <span className="text-lg">Not Yet Available</span>
                </div>
            </Card>
        </div>
    )
}