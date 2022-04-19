import "swiper/css"
import 'emoji-mart/css/emoji-mart.css'
import { useState } from 'react'
import { Card, Button, Popover } from "konsta/react"
import { Xmark, Smiley, Plus } from 'framework7-icons/react'
import { Picker } from 'emoji-mart'
import Mode from '../../../lib/Theme/setDarkmode'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html"
import { Swiper, SwiperSlide } from 'swiper/react'
export default function CreatePost({ postFiles: { type, files } }) {
    const { thememode, updatethememode } = Mode()
    const [emojipicker, setemojipicker] = useState({ target: undefined, opened: false, theme: undefined })
    const [post, setpost] = useState({
        body: "",
        placeholder: true,
        imageStyle: 'slide', // tiled or slided
    })
    const postBody = (e) => {
        setpost({ ...post, body: sanitizeHtml(e.target.value) })
    }
    console.log(type, files)
    return (
        <>
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
                    className='w-full sm:w-[600px] !rounded-lg'
                    header={
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-normal">Create Post</span>
                            <Button
                                clear
                                rounded
                                className="!w-auto"
                                colors={{
                                    text: 'text-red-500',
                                    border: 'border-red-500',
                                    bg: 'bg-red-500',
                                    activeBg: 'active:bg-red-500',
                                    activeBgDark: 'active:bg-red-600',
                                    touchRipple: 'touch-ripple-red-500'
                                }}
                                onClick={(e) => {
                                    //hide create post
                                    if (document.querySelector('.createpost').classList.contains('flex')) {
                                        document.querySelector('.createpost').classList.add("animate__fadeOut")
                                        setTimeout(() => {
                                            document.querySelector('.createpost').classList.remove("flex", "animate__fadeOut")
                                            document.querySelector('.createpost').classList.add("hidden")
                                        }, 500)
                                    }
                                }}>
                                <Xmark className="w-6 h-6" />
                            </Button>
                        </div>
                    }
                    footer={
                        <div>
                            <Button
                                rounded>
                                Post
                            </Button>
                        </div>
                    }>
                    <div className="relative">
                        {/* Show placeholder when post body is empty */}
                        {post.body === "" && <span className='animate__animated animate__fadeInUp ms-300 pointer-events-none absolute text-xl dark:text-zinc-400 text-zinc-500 p-2'>{"Hey!, What's on your mind?"}</span>}
                        <ContentEditable
                            className="post-body p-2 overflow-auto h-[40vh] text-xl text-gray-800 dark:text-gray-300 rounded-md outline-none transition-all"
                            onChange={postBody}
                            html={post.body} />
                        <div className="w-full">
                            <div className='pr-12'>
                                <Swiper
                                    spaceBetween={2}
                                    slidesPerView={6}
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 8
                                        }
                                    }}>
                                    {/* Preview selected files if the file type is image */}
                                    {type === 'image' && files.length > 0 && files.map((file, i) => (
                                        <SwiperSlide key={i}>
                                            <div className='animate__animated animate__fadeInRight ms-300 cursor-pointer h-13 w-13 shadow-lg rounded-md mb-2'>
                                                <img
                                                    alt="file preview"
                                                    className='object-cover w-full h-full rounded-md top-0 right-0'
                                                    src={file} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    <SwiperSlide>
                                        <Button
                                            clear
                                            className='animate__animated animate__fadeInRight ms-300 cursor-pointer !h-13 !w-13 flex justify-center items-center shadow-lg rounded-md mb-2'>
                                            <Plus className="w-7 h-7" />
                                        </Button>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <Button
                                clear
                                rounded
                                colors={{
                                    text: 'text-gray-500',
                                    border: 'border-gray-500',
                                    bg: 'bg-red-500',
                                    activeBg: 'active:bg-gray-500',
                                    activeBgDark: 'active:bg-gray-600',
                                    touchRipple: 'touch-ripple-gray-500'
                                }}
                                className="animate__animated animate__fadeInUp ms-300 !w-auto emoji absolute right-0 bottom-0"
                                onClick={() => setemojipicker({ ...emojipicker, target: '.emoji', opened: true, theme: thememode === 'dark' ? 'dark' : 'light' })}>
                                <Smiley className="w-7 h-7 " />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Emoji picker */}
            <Popover
                opened={emojipicker.opened}
                target={emojipicker.target}
                size="w-auto"
                onBackdropClick={() => setemojipicker({ ...emojipicker, target: undefined, opened: false })}>
                <Picker
                    title='Pick your emoji…'
                    emoji='point_up'
                    set="facebook"
                    theme={emojipicker.theme}
                    onSelect={(e) => {
                        setpost({ ...post, body: `${post.body}${e.native}` })
                        setemojipicker({ ...emojipicker, target: undefined, opened: false })
                    }} />
            </Popover>

        </>
    )
}