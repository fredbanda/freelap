import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonBlue from '../button/ButtonBlue';
import ButtonRed from '../button/ButtonRed';
import { Bars3BottomRightIcon } from '@heroicons/react/20/solid';

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className='h-[12vh] bg-slate-600 shadow-md text-white'>
      <div className='flex items-center justify-between mx-auto h-[12vh] w-[85%]'>
        <Link href={'/'}>
            <h1 className='text-[22px md:text[28px] font-bold text-yellow-400' >
                <span className='ml-[-18px] text-[22px] md:text-[38px]'>Charity</span> 
            </h1>
        </Link>
        <ul className='hidden lg:flex items-center space-x-10'>
          <li className='cursor-point text-white text-[22px] hover:underline hover:text transition-all duration-200'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='cursor-point text-white text-[22px] hover:underline hover:text transition-all duration-200'>
            <Link href={'/'}>About</Link>
          </li>
          <li className='cursor-point text-white text-[22px] hover:underline hover:text transition-all duration-200'>
            <Link href={'/'}>Donate</Link>
          </li>
          <li className='cursor-point text-white text-[22px] hover:underline hover:text transition-all duration-200'>
            <Link href={'/'}>Contact Us</Link>
          </li>
        </ul>
        <div className='flex items-center space-x-2 md:space-x-5'>
          <ButtonBlue text='Login' />
          <ButtonRed text='Register' />
          <Bars3BottomRightIcon
            onClick={openNav}
            className='w--[1.5rem] lg:hidden h-[1.5rem] text-slate-50 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
