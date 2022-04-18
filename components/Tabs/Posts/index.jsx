import { useState, useEffect } from 'react'
import { Card, Button, Link, Preloader } from 'konsta/react'
import { Ellipsis, HeartFill, Heart, ChatBubbleText, ArrowshapeTurnUpRight } from 'framework7-icons/react'
import NextLink from 'next/link'
import faker from '@faker-js/faker'
import moment from 'moment'
import InfiniteScroll from 'react-infinite-scroll-component'
import CreatePost from '../../../components/Tabs/Posts/createpost'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Fileupload from '../../../lib/Posts/fileupload'
export default function Posts({ tab, user, posts }) {
    const [data, setdata] = useState({
        posts: posts,
        viewed: [],
        more: true
    })
    const loadposts = () => {
        let newposts = data.posts, viewedposts = []
        setTimeout(() => {
            //get last viewed posts id 
            for (let i = 0; i < data.posts.length; i++) {
                viewedposts.push(data.posts[i].id)
            }
            //get new posts
            for (let i = 0; i < 1; i++) {
                newposts.push({
                    id: faker.datatype.uuid(),
                    image: faker.image.avatar(),
                    name: faker.name.findName(),
                    photos: [
                        `https://source.unsplash.com/random/?img=${Math.floor(Math.random() * 99999)}`,
                        `https://source.unsplash.com/random/?img=${Math.floor(Math.random() * 99999)}`,
                        `https://source.unsplash.com/random/?img=${Math.floor(Math.random() * 99999)}`,
                        `https://source.unsplash.com/random/?img=${Math.floor(Math.random() * 99999)}`,
                        `https://source.unsplash.com/random/?img=${Math.floor(Math.random() * 99999)}`,
                        `https://source.unsplash.com/random/?img=${Math.floor(Math.random() * 99999)}`,
                        `https://source.unsplash.com/random/?img=${Math.floor(Math.random() * 99999)}`
                    ],
                    text: faker.lorem.sentences(),
                    privacy: 'Public',
                    created: moment().format()
                })
            }
            setdata({ ...data, posts: newposts, viewed: viewedposts })
        }, 1000)
    }
    return (
        <>
            <div
                id='posts'
                className={`${tab === 'posts' ? 'flex animate__animated animate__fadeIn' : 'hidden'} flex-col overflow-auto lg:px-15 p-1.5 w-full h-[calc(100vh-104px)] lg:h-[calc(100vh-64px)] lg:col-span-2`}>
                <InfiniteScroll
                    className="flex flex-col gap-3"
                    dataLength={data.posts.length}
                    scrollableTarget="posts"
                    hasMore={data.more}
                    next={loadposts}
                    endMessage={<span className='text-center'>No more posts</span>}
                    loader={<span className='text-center'>Please wait...</span>}>

                    {/* Create Post */}
                    <div className='w-full'>
                        <Card
                            className='!w-full !rounded-lg mb-2'
                            margin='m-0'
                            footer={
                                <div className='grid grid-cols-2 gap-2'>
                                    <Button
                                        clear>
                                        Photos
                                        <input
                                            className='absolute file:cursor-pointer opacity-0 block w-full'
                                            accept='image/*'
                                            type="file"
                                            multiple
                                            onChange={(e) => Fileupload(e, 'image')} />
                                    </Button>
                                    <Button
                                        clear>
                                        File
                                        <input
                                            className='absolute file:cursor-pointer opacity-0 block w-full'
                                            type="file"
                                            multiple
                                            onChange={(e) => Fileupload(e, 'file')}
                                        />
                                    </Button>
                                </div>
                            }>
                            <div className='flex gap-2'>
                                <NextLink href={`/profile/${user.id}`} passHref>
                                    <img
                                        className='rounded-full w-12 h-12 object-cover cursor-pointer'
                                        src={user.image}
                                        alt='user profile' />
                                </NextLink>
                                <div
                                    className='w-full rounded-3xl flex items-center px-4 bg-gray-100 dark:bg-zinc-800 cursor-pointer transition-all hover:bg-gray-200/70 dark:hover:bg-zinc-700/50'
                                    onClick={() => {
                                        document.querySelector(".createpost").classList.add("flex", "animate__fadeIn")
                                        document.querySelector(".createpost").classList.remove("hidden")
                                        setTimeout(() => {
                                            document.querySelector(".createpost").classList.remove("animate__fadeIn")
                                        }, 500)
                                    }}>
                                    <span className='text-base text-gray-500 dark:text-zinc-500'>Say Hello World!</span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Posts */}
                    {data.posts.map((post, i) => (
                        <div key={i} className='w-full'>
                            <Card
                                outline
                                className='!w-full !rounded-lg'
                                margin='m-0'
                                header={
                                    <div className='flex justify-between items-center p-2'>
                                        <div className='flex gap-2'>
                                            <NextLink href={`/profile/${post.id}`} passHref>
                                                <img
                                                    className='rounded-full w-12 h-12 object-cover cursor-pointer'
                                                    src={post.image}
                                                    alt='user profile' />
                                            </NextLink>
                                            <div className='flex flex-col justify-start items-start'>
                                                <NextLink href={`/profile/${post.id}`} passHref>
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
                                <div className='hhhh'>
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
                                </div>
                            </Card>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>

            {/* Create Post */}
            <CreatePost />
        </>
    )
}