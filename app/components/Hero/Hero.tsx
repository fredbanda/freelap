import React from 'react'
import ButtonBlue from '../button/ButtonBlue'
import ButtonRed from '../button/ButtonRed'
import Image from 'next/image'
import HeroImg from '@/public/hero.png'

const Hero = () => {
  return (
            <>
            <section className="h-[70vh] lg:h-[88nh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center mt-[28px] sm:mt-[16px] lg:mt-[28px]">
                <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
                    <div className="col-span-2">
                        <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] text-slate-700 font-bold">Bridging the digital divide in South Africa.</h1>
                        <p className='md:text-[17px] text-[15px] mb-[2rem] text-slate-600 opacity-90 font-[400] '>Welcome to CharityPort, dedicated to bridging the digital divide in South Africa. Our organization is committed to providing a helping hand to those who lack access to computers due to financial constraints. Through generous donations of used computers and laptops, we aim to empower individuals by granting them the essential tools for education, employment, and connectivity. Join us in our mission to create equal opportunities and make technology an accessible resource for all, unlocking a brighter future for South Africans in need.</p>
                        <div className="flex items-center space-x-4 md:space-x-6">
                            <ButtonBlue text='Donate A Laptop' />
                            <ButtonRed text='Request A Laptop' />
                        </div>
                    </div>
                    <div className='col-span-3 hidden sm:block md:mt-[20px] h-[100%] mt-5'>
                        <Image
                        src={HeroImg}
                        alt='camp'
                        className='rounded-md w-full mr-5'
                         />
                    </div>
                </div>
            </section>
            </>
  )
}

export default Hero
