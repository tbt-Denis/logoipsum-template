import React, { useState } from "react"
import logo from "./assets/Logo Color.svg"

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className='bg-lightOrange'>
			<div className='container'>
				<nav className='flex justify-between items-center min-h-[145px] pt-2 md:min-h-[70px]'>
					<a href='.'>
						<img src={logo} alt='Logo' />
					</a>
					<ul className='flex gap-12 flex-wrap md:hidden'>
						<li>
							<a
								className='font-bold text-sm hover:text-black leading-5'
								href='.'>
								Home
							</a>
						</li>
						<li>
							<a
								className='font-bold text-sm hover:text-black leading-5'
								href='.'>
								Features
							</a>
						</li>
						<li>
							<a
								className='font-bold text-sm hover:text-black leading-5'
								href='.'>
								Pricing
							</a>
						</li>
						<li>
							<a
								className='font-bold text-sm hover:text-black leading-5'
								href='.'>
								Blog
							</a>
						</li>
					</ul>
					{/* Burger */}
					{isOpen && (
						<ul
							className='hidden gap-4 py-4 flex-col absolute top-full w-full bg-white left-0 items-center overflow-auto max-h-48
						border-b md:flex'>
							<li>
								<a
									className='font-bold text-sm hover:text-black leading-5'
									href='.'>
									Home
								</a>
							</li>
							<li>
								<a
									className='font-bold text-sm hover:text-black leading-5'
									href='.'>
									Features
								</a>
							</li>
							<li>
								<a
									className='font-bold text-sm hover:text-black leading-5'
									href='.'>
									Pricing
								</a>
							</li>
							<li>
								<a
									className='font-bold text-sm hover:text-black leading-5'
									href='.'>
									Blog
								</a>
							</li>
						</ul>
					)}
					<button className='transition-all active:scale-[1.015] text-[17px] font-bold leading-6 text-center py-[19px] px-[60px] rounded-[10px] bg-orange text-white sm:px-5 sm:py-3 md:hidden'>
						Get Started
					</button>
					<button
						className='space-y-2 hidden md:block'
						onClick={() => setIsOpen(!isOpen)}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-8 h-8'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
				</nav>
			</div>
		</header>
	)
}