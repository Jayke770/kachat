import { Card, Button, Block } from "konsta/react"
import { LogoGoogle, LogoFacebook, LogoGithub } from 'framework7-icons/react'
import { signIn } from 'next-auth/react'
export default function LoginForm() {
    return (
        <>
            <div className="h-screen w-full">
                <div className="transition-all h-full w-full flex flex-col md:grid md:grid-cols-2 py-3 gap-2 ">
                    <div className="transition-all w-full flex flex-col justify-center md:items-start md:pl-24 lg:pl-28 items-center gap-2 py-10 mt-[3vh]">
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className="text-6xl font-extrabold text-primary">KaChat</h1>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="font-normal pl-0.5">Meet friends around the world</p>
                    </div>
                    <div className="transition-all md:justify-center lg:justify-start z-20 p-3 md:pl-20 mt-[3vh]">
                        <div className="flex w-full justify-center items-center h-full">
                            <Card
                                data-aos="fade-up"
                                margin="m-0"
                                className="!rounded-xl w-full md:w-[380px] z-20">
                                <div className="grid place-items-center p-3">
                                    <img
                                        className="h-36 w-36 object-contain"
                                        alt="kachat icon"
                                        src="/icon.png" />
                                </div>
                                <Block className="text-center text-sm">Continue with your favorite social networks</Block>
                                <div className="flex flex-col gap-3 p-2 md:p-4">
                                    <Button
                                        rounded
                                        large
                                        onClick={() => signIn('google', { callbackUrl: '/home' })}
                                        className="grid grid-cols-6 gap-3"
                                        colors={{
                                            text: 'text-red-500',
                                            border: 'border-red-500',
                                            bg: 'bg-red-500',
                                            activeBg: 'active:bg-red-500',
                                            activeBgDark: 'active:bg-red-600',
                                            touchRipple: 'touch-ripple-red-600'
                                        }}>
                                        <LogoGoogle className='w-5 h-5 ml-2' />
                                        <span className="col-span-5 w-full text-left">Continue with Google</span>
                                    </Button>
                                    <Button
                                        rounded
                                        large
                                        onClick={() => signIn('facebook', { callbackUrl: '/home' })}
                                        className="grid grid-cols-6 gap-3"
                                        colors={{
                                            text: 'text-blue-700',
                                            border: 'border-blue-700',
                                            bg: 'bg-blue-700',
                                            activeBg: 'active:bg-blue-700',
                                            activeBgDark: 'active:bg-blue-700',
                                            touchRipple: 'touch-ripple-blue-700'
                                        }}>
                                        <LogoFacebook className='w-5 h-5 ml-2' />
                                        <span className="col-span-5 w-full text-left">Continue with Faceboook</span>
                                    </Button>
                                    <Button
                                        rounded
                                        large
                                        onClick={() => signIn('github', { callbackUrl: '/home' })}
                                        className="grid grid-cols-6 gap-3"
                                        colors={{
                                            text: 'text-zinc-600',
                                            border: 'border-zinc-600',
                                            bg: 'bg-zinc-600',
                                            activeBg: 'active:bg-zinc-600',
                                            activeBgDark: 'active:bg-zinc-600',
                                            touchRipple: 'touch-ripple-zinc-600'
                                        }}>
                                        <LogoGithub className='w-5 h-5 m-2' />
                                        <span className="col-span-5 w-full text-left">Continue with Github</span>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div
                adata-aos="fade-in"
                adata-aos-duration="1000"
                className="custom-shape-divider-bottom-1647246727 !fixed">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-primary dark:fill-primary-dark"></path>
                </svg>
            </div>
        </>
    )
}