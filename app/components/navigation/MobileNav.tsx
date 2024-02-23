import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({nav, closeNav}: Props) => {
  const navOpenStyle = nav?"translate-x-0 opacity-100":"translate-x-full opacity-0"
  return (
    <div className={`transform transition-all duration-500 fixed top-0 left-0 z-[200] right-0 bottom-0 bg-red-600 ${navOpenStyle}`}>
      <XMarkIcon onClick={closeNav} className='w-[2rem] h-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem] cursor-pointer'/>
      <ul className="relative flex flex-col space-y-10 justify-center h-[100%] items-center">
            <li className="cursor-point text-white text-[22px] hover:underline hover:text transition-all duration-200">
                <Link href={'/'}>Home</Link>
            </li>
            <li className="cursor-point text-white text-[22px] hover:underline hover:text transition-all duration-200">
                <Link href={'/'}>About</Link>
            </li>
            <li className="cursor-point text-white text-[22px] hover:underline hover:text transition-all duration-200">
                <Link href={'/'}>Donate</Link>
            </li>
            <li className="cursor-point text-white text-[22px] hover:underline hover:text transition-all duration-200">
                <Link href={'/'}>Contact Us</Link>
            </li>
        </ul>
    </div>
  )
}

export default MobileNav
