import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import SectionImg from '@/public/heroa.jpg';
import Image from 'next/image';
import ButtonBlue from '../button/ButtonBlue';

const Features = () => {
  return (
    <>
      <section className='sm:mt-[16px] lg:mt-[28px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[12px]'>
        <div className='my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row'>
          <div className='sm:text-center lg:text-left'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl '>
              <span className='block xl:inline'>Our Drive in </span>
              <span className='block text-indigo-600 xl:inline '>
                South Africa.
              </span>
            </h1>
            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
              We are a charity organization dedicated to providing a helping
              hand to those who lack access to computers due to financial
              constraints. Through generous donations of used computers and
              laptops, we aim to empower disadvantaged learners by granting them
              the essential tools for education, employment, and connectivity.<br />
              We are about good education for everyone and we are committed to give a computer to every child.
              By th year 2030 we want all schools to have beautiful computer labs and free wifi where learners can do their homework.
            </p>

            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='w-full md:w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10'
                >
                  Start The Request
                </a>
              </div>
            </div>
          </div>

          <div className='lg:inset-y-0 lg:right-0 lg:w-1/2 my-4'>
            <Image
              className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-md'
              src={SectionImg}
              alt='section'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
