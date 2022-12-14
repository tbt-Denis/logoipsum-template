import React from "react"
import { Card } from "./components/Card"

export const Section3 = () => {
	return (
		<div className='container'>
			<section className='flex flex-col gap-24 md:gap-14'>
				<h1 className='text-dark font-bold text-6xl leading-[70px] -tracking-wide md:text-4xl'>
					Get the right plan <br /> for future
				</h1>
				<section className='flex justify-between gap-10 md:flex-wrap'>
					<Card>
						<p className='mt-[10px] text-grey mb-6'>Starter</p>
						<h2 className='font-bold text-6xl leading-[56px] -tracking-wide text-anotherDark'>
							Free
						</h2>
						<div className='flex flex-col mt-7 mb-9'>
							<p className='text-lg leading-[50px] -tracking-wider'>
								1 Website
							</p>
							<p className='text-lg leading-[50px] -tracking-wider'>
								5 GB Hosting
							</p>
							<p className='text-lg leading-[50px] -tracking-wider'>
								Limited Support
							</p>
						</div>
						<button className='transition-all active:scale-[1.015] text-[17px] font-bold leading-6 text-center py-[19px] px-[60px] rounded-[10px] bg-white text-purple sm:px-5 sm:py-3 sm:w-full flex-1'>
							Get Started
						</button>
					</Card>
					<Card>
						<p className='mt-[10px] mb-6'>Premium</p>
						<h2 className='font-bold text-6xl leading-[56px] -tracking-wide '>
							$29<span className='text-2xl'>/month</span>
						</h2>
						<div className='flex flex-col mt-7 mb-9'>
							<p className='text-lg leading-[50px] -tracking-wider'>
								1 Website
							</p>
							<p className='text-lg leading-[50px] -tracking-wider'>
								5 GB Hosting
							</p>
							<p className='text-lg leading-[50px] -tracking-wider'>
								Limited Support
							</p>
						</div>
						<button className='transition-all active:scale-[1.015] text-[17px] font-bold leading-6 text-center py-[19px] px-[60px] rounded-[10px] bg-darkOrange text-white sm:px-5 sm:py-3 sm:w-full flex-1'>
							Get Started
						</button>
					</Card>
					<Card>
						<p className='mt-[10px] text-grey mb-6'>Enterprise</p>
						<h2 className='font-bold text-6xl leading-[56px] -tracking-wide text-anotherDark'>
							$49<span className='text-2xl'>/month</span>
						</h2>
						<div className='flex flex-col mt-7 mb-9'>
							<p className='text-lg leading-[50px] -tracking-wider'>
								1 Website
							</p>
							<p className='text-lg leading-[50px] -tracking-wider'>
								5 GB Hosting
							</p>
							<p className='text-lg leading-[50px] -tracking-wider'>
								Limited Support
							</p>
						</div>
						<button className='transition-all active:scale-[1.015] text-[17px] font-bold leading-6 text-center py-[19px] px-[60px] rounded-[10px] bg-white text-purple sm:px-5 sm:py-3 sm:w-full flex-1'>
							Get Started
						</button>
					</Card>
				</section>
			</section>
		</div>
	)
}
