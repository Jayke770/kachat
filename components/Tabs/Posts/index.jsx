import { useState, useEffect } from 'react'
import { Card, Button, Link, Preloader } from 'konsta/react'
import { Ellipsis, HeartFill, Heart, ChatBubbleText, ArrowshapeTurnUpRight } from 'framework7-icons/react'
import NextLink from 'next/link'
import faker from '@faker-js/faker'
import moment from 'moment'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
export default function Posts({ tab, user }) {
    const [posts, setposts] = useState(null)
    useEffect(() => {
        let data = []
        for (let i = 0; i < 20; i++) {
            data.push({
                id: faker.datatype.uuid(),
                image: faker.image.avatar(),
                name: faker.name.findName(),
                photos: [faker.image.abstract(), faker.image.animals(), faker.image.avatar()],
                text: faker.lorem.sentences(),
                privacy: 'Public',
                created: faker.date.past()
            })
        }
        setTimeout(() => {
            setposts(data)
        }, 1000)
    }, [])
    return (
        <div className={`${tab === 'posts' ? 'flex animate__animated animate__fadeIn' : 'hidden'} flex-col gap-2 overflow-auto lg:px-15 p-2 w-full h-[calc(100vh-104px)] lg:h-[calc(100vh-64px)] lg:col-span-2`}>
            {/* Create Post */}
            <div className='w-full'>
                <Card
                    className='!w-full !rounded-lg mb-2'
                    margin='m-0'
                    footer={
                        <div className='grid grid-cols-3 gap-2'>
                            <Button
                                clear>Add Photos</Button>
                        </div>
                    }>
                    <div className='flex gap-2'>
                        <img
                            className='rounded-full w-12 h-12 object-cover'
                            src={user.image}
                            alt='user profile' />
                        <div
                            className='w-full rounded-3xl flex items-center px-4 bg-gray-100 dark:bg-zinc-800 cursor-pointer transition-all hover:bg-gray-200/70 dark:hover:bg-zinc-700/70'>
                            <span className='text-base text-gray-500 dark:text-zinc-500'>Sample text Here</span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Posts */}
            {posts ? (
                posts.map((post, i) => (
                    <div key={i} className='w-full'>
                        <Card
                            className='!w-full !rounded-lg'
                            margin='m-0'
                            header={
                                <div className='flex justify-between items-center p-2'>
                                    <div className='flex gap-2'>
                                        <img
                                            className='rounded-full w-12 h-12 object-cover'
                                            src={post.image}
                                            alt='user profile' />
                                        <div className='flex flex-col justify-start items-start'>
                                            <NextLink href={post.id} passHref>
                                                <Link className='text-bold'>{post.name}</Link>
                                            </NextLink>
                                            <span className='text-xs text-gray-500 dark:text-gray-400'>{moment(post.created).fromNow()} - {post.privacy}</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <Button clear rounded>
                                            <Ellipsis className="w-7 h-7" />
                                        </Button>
                                    </div>
                                </div>
                            }
                            footer={
                                <div className='grid grid-cols-3 gap-2'>
                                    <Button
                                        rounded
                                        clear>
                                        <Heart className="w-7 h-7" />
                                    </Button>
                                    <Button
                                        rounded
                                        clear>
                                        <ChatBubbleText className="w-7 h-7" />
                                    </Button>
                                    <Button
                                        rounded
                                        clear>
                                        <ArrowshapeTurnUpRight className="w-7 h-7" />
                                    </Button>
                                </div>
                            }>
                            {/* Post Text */}
                            <div className='text-gray-900 dark:text-gray-200 mb-2'>{post.text}</div>
                            {/* Post Photos */}
                            {post.photos.length > 0 && (
                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    spaceBetween={2}
                                    modules={[Pagination]}>
                                    {post.photos.map((photo, i) => (
                                        <SwiperSlide key={i}>
                                            <img
                                                className='w-full object-cover h-[450px]'
                                                alt="post"
                                                src={photo} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </Card>
                    </div>
                ))
            ) : (
                <div className='grid place-items-center w-full'>
                    <Preloader />
                </div>
            )
            }
        </div >
    )
}
