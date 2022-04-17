import NextLink from 'next/link'
import { Card, List, ListButton, ListInput } from 'konsta/react'
export default function Reset() {
    return (
        <>
            <div className="h-screen w-full flex justify-center items-center p-3">
                <Card
                    data-aos="fade-up"
                    margin='m-0'
                    className='z-20 w-full sm:w-[500px] !rounded-xl'>
                    <div className='flex flex-col mb-3'>
                        <p className='text-3xl font-extrabold text-primary dark:text-primary-dark'>Reset Password</p>
                    </div>
                    <List
                        margin='m-0'
                        hairlines={false}>
                        <ListInput
                            type='email'
                            floatingLabel
                            label='Enter your email' />
                        <ListButton
                            className='mx-3 mt-5'
                            colors={{
                                text: 'text-red-500',
                                activeBg: 'active:bg-red-500',
                                touchRipple: 'touch-ripple-red-500',
                            }}>Reset Account</ListButton>
                    </List>
                    <div className='flex justify-center mt-5'>
                        <NextLink href='/'>
                            <a className="text-primary underline text-right mr-1">Login</a>
                        </NextLink>
                        {"|"}
                        <NextLink href='/auth/signup'>
                            <a className="text-primary underline ml-1">Sign Up</a>
                        </NextLink>
                    </div>
                </Card>
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