import { Card, List, ListInput, Icon, Button } from "konsta/react"
import NextLink from 'next/link'
import { LogoGoogle, ChatBubble2, LogoFacebook, LogoGithub } from 'framework7-icons/react'
import { signIn } from 'next-auth/react'
export default function LoginForm() {
    return (
        <>
            <div className="h-screen overflow-hidden w-full flex justify-center items-center gap-2">
                <div className="w-full lg:flex flex-col pl-28 gap-2 hidden">
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="500"
                        className="text-6xl font-extrabold text-primary">KaChat</h1>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="font-normal">Meet friends around the world</p>
                </div>
                <div className="trasition-all flex md:justify-center lg:justify-end fixed w-full lg:right-[100px] xl:right-[150px] z-20 p-3">
                    <Card
                        data-aos="fade-up"
                        margin="m-0"
                        className="!rounded-xl w-full md:w-[380px]">
                        <div className="grid place-items-center">
                            <img
                                className="h-36 w-36 object-contain mb-3    "
                                alt="kachat icon"
                                src="/icon.png" />
                            <p className="font-normal lg:hidden text-center">Meet friends around the world</p>
                        </div>
                        <List
                            className="mb-1"
                            hairlines={false}>
                            <ListInput
                                floatingLabel
                                label='Username or Email'
                                placeholder="Username or Email"
                            />
                            <ListInput
                                className="mt-5"
                                floatingLabel
                                label='Password'
                                placeholder="Password"
                                type="password"
                            />
                            <div className="flex justify-end px-3 mt-2">
                                <NextLink
                                    href='/auth/reset-password'>
                                    <a
                                        className="text-red-500 text-sm underline">
                                        Forgot Password?</a>
                                </NextLink>
                            </div>
                            <div className="px-3 mt-4">
                                <Button
                                    rounded>
                                    Login</Button>
                            </div>
                        </List>
                        <div className="mx-3">
                            <p className='text-center p-2 dark:text-gray-400 text-gray-500'>or</p>
                            <div className="flex justify-center items-center gap-2">
                                <Button
                                    rounded
                                    onClick={() => signIn('google', { callbackUrl: '/home' })}
                                    className="flex gap-3 !w-auto"
                                    colors={{
                                        text: 'text-red-500',
                                        border: 'border-red-500',
                                        bg: 'bg-red-500',
                                        activeBg: 'active:bg-red-500',
                                        activeBgDark: 'active:bg-red-600',
                                    }}>
                                    <LogoGoogle className='w-5 h-5' />
                                </Button>
                                <Button
                                    rounded
                                    onClick={() => signIn('facebook', { callbackUrl: '/home' })}
                                    className="flex gap-3 !w-auto"
                                    colors={{
                                        text: 'text-blue-700',
                                        border: 'border-blue-700',
                                        bg: 'bg-blue-700',
                                        activeBg: 'active:bg-blue-700',
                                        activeBgDark: 'active:bg-blue-700',
                                    }}>
                                    <LogoFacebook className='w-5 h-5' />
                                </Button>
                                <Button
                                    rounded
                                    onClick={() => signIn('github', { callbackUrl: '/home' })}
                                    className="flex gap-3 !w-auto"
                                    colors={{
                                        text: 'text-zinc-600',
                                        border: 'border-zinc-600',
                                        bg: 'bg-zinc-600',
                                        activeBg: 'active:bg-zinc-600',
                                        activeBgDark: 'active:bg-zinc-600',
                                    }}>
                                    <LogoGithub className='w-5 h-5' />
                                </Button>
                            </div>
                            <p className="text-center mt-3 text-gray-900 dark:text-gray-300 text-sm">
                                {"Don't have an account?"}
                                <NextLink href='/auth/signup'>
                                    <a className="text-primary underline"> Sign Up</a>
                                </NextLink>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
            <div
                className="animate__animated animate__fadeIn custom-shape-divider-bottom-1647246727">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-primary dark:fill-primary-dark"></path>
                </svg>
            </div>
        </>
    )
}