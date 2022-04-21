import "swiper/css"
import 'emoji-mart/css/emoji-mart.css'
import { useEffect, useState } from 'react'
import { Card, Button, Popover } from "konsta/react"
import { Xmark, Smiley, Plus, XmarkCircleFill } from 'framework7-icons/react'
import { Picker } from 'emoji-mart'
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html"
import { Swiper, SwiperSlide } from 'swiper/react'
import Mode from '../../../lib/Theme/setDarkmode'
import CheckFile from '../../../lib/Posts/checkFIle'
export default function CreatePost() {
    const { thememode } = Mode()
    const [post, setpost] = useState({ photos: undefined })

    //remove selected file 
    const removeFile = (id, name) => {
        let tempFiles = post.photos
        //remove file from the post state
        for (let i = 0; i < tempFiles.length; i++) {
            if (tempFiles[i].id === id) {
                tempFiles.splice(i, 1)
                setpost({ ...post, photos: tempFiles })
                break
            }
        }
    }
    console.log(post)
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
                    <div className="w-full">
                        <textarea
                            placeholder="Hello World!"
                            className="post-body resize-none p-2 w-full bg-transparent overflow-auto h-[40vh] text-xl text-gray-800 dark:text-gray-300 rounded-md outline-none transition-all">
                        </textarea>
                        <div className="w-full">
                            <div className='pr-12'>
                                <Swiper
                                    spaceBetween={5}
                                    slidesPerView={5}
                                    breakpoints={{
                                        320: {
                                            spaceBetween: 3,
                                            slidesPerView: 4
                                        },
                                        480: {
                                            spaceBetween: 5,
                                            slidesPerView: 6
                                        },
                                        720: {
                                            spaceBetween: 5,
                                            slidesPerView: 8
                                        }
                                    }}>

                                    {/* Preview selected files if the file type is image */}
                                    {post.photos && post.photos.map((file, i) => (
                                        <SwiperSlide key={i}>
                                            <div className='group animate__animated animate__fadeInRight ms-300 relative cursor-pointer h-13 w-13 shadow-md rounded-md mb-2'>
                                                <img
                                                    alt="file preview"
                                                    className='object-cover w-full h-full rounded-md top-0 right-0'
                                                    src={file.file} />
                                                <div className="animate__animated animate__fadeInDown ms-300 group-hover:flex hidden absolute top-0 shadow-md rounded-md justify-center items-center h-full w-full bg-zinc-700/50 dark:bg-zinc-900/60">
                                                    <Button
                                                        colors={{
                                                            text: 'text-red-500',
                                                            border: 'border-red-500',
                                                            bg: 'bg-red-500',
                                                            activeBg: 'active:bg-red-500',
                                                            activeBgDark: 'active:bg-red-600',
                                                            touchRipple: 'touch-ripple-red-500/70'
                                                        }}
                                                        clear
                                                        rounded
                                                        large
                                                        onClick={() => removeFile(file.id, file.name)}>
                                                        <XmarkCircleFill className="w-6 h-6 text-red-500" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                    <SwiperSlide>
                                        <input
                                            className="photos-file hidden h-0 w-0"
                                            type='file'
                                            accept="image/*"
                                            multiple
                                            onChange={(e) => {
                                                CheckFile(e, 'image').then((res) => {
                                                    setpost({ ...post, photos: res.length > 0 ? res : undefined })
                                                })
                                            }} />
                                        <Button
                                            clear
                                            rounded
                                            onClick={() => {
                                                document.querySelector(".photos-file").value = null
                                                document.querySelector(".photos-file").click()
                                            }}
                                            className='animate__animated animate__fadeInRight ms-300 cursor-pointer !h-13 !w-13 flex justify-center items-center shadow-md rounded-md mb-2'>
                                            <Plus className="w-7 h-7" />
                                        </Button>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}