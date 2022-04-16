import { List, ListButton, ListInput, Button } from 'konsta/react'
import NextLink from 'next/link'
import { LogoGoogle } from 'framework7-icons/react'
import { signIn } from 'next-auth/react'
export default function SignupForm() {
	return (
		<div className="h-screen overflow-hidden w-full flex justify-center items-center p-3">
			<div data-aos="fade-up" className="grid lg:grid-cols-2 z-50 gap-2 p-2 bg-block-strong-light dark:bg-block-strong-dark overflow-hidden shadow rounded-xl w-full sm:w-4/6 lg:w-[80%]">
				<div className='w-full hidden lg:flex justify-center items-center'>
					<img
						className='object-fill w-full h-60'
						alt='Signup Icon'
						src="/assets/signup.svg" />
				</div>
				<div className='w-full flex flex-col py-5 lg:px-3'>
					<div className='w-full mb-3 px-3 lg:px-4 flex flex-col justify-start items-start'>
						<p className='text-3xl font-extrabold text-primary dark:text-primary-dark'>Create Your Account</p>
						<p className='text-sm px-1'>{"It's free and easy Sign Up Now!"}</p>
					</div>
					<List
						className="w-full"
						margin='m-0'
						hairlines={false}>
						<ListInput
							floatingLabel
							label='Name' />
						<ListInput
							floatingLabel
							type='email'
							label='Email' />
						<ListInput
							floatingLabel
							type='password'
							label='Password' />
						<ListInput
							floatingLabel
							type='password'
							label='Confirm Password' />
						<ListButton
							className="mt-5 mx-3">
							Sign Up</ListButton>
					</List>
					<div className="mx-3">
						<p className='text-center p-2 dark:text-gray-400 text-gray-500'>or</p>
						<Button
							onClick={() => signIn('google', { callbackUrl: '/' })}
							className="flex gap-3">
							<LogoGoogle className='w-5 h-5' />
							<span className="w-full text-center">Sign Up with Google</span>
						</Button>
						<p className="text-center mt-3 text-gray-900 dark:text-gray-300 text-sm">
							{"Already have an account?"}
							<NextLink href='/auth/login'>
								<a className="text-primary underline"> Login</a>
							</NextLink>
						</p>
					</div>
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
		</div>
	)
}