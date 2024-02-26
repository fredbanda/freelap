import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-slate-700 text-white border-gray-200 py-2.5 dark:bg-gray-900 gap-6'>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
        <a href='/' className='flex items-center'>
          <span className='self-center text-3xl font-semibold whitespace-nowrap text-yellow-500 dark:text-white'>
            CharityPort
          </span>
        </a>
        <div className='flex items-center lg:order-2'>
          <div className='hidden mt-2 mr-4 sm:inline-block'>
            <span></span>
          </div>

          <button
            type='button'
            className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            onClick={toggleMobileMenu}
          >
            <span className='sr-only'>{isMobileMenuOpen ? 'Close' : 'Open'} main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {/* X icon for close */}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6 lg:hidden text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                {/* Hamburger icon for open */}
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:flex items-center justify-between w-full lg:flex lg:w-auto lg:order-1 text-white`}
          id='mobile-menu-2'
        >
          {/* Your existing menu items */}
          <div
            className='items-center justify-between w-full lg:flex lg:w-auto lg:order-1 text-white'
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-white gap-8 '>
              <li>
                <a
                  href='/'
                  className='block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 '
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/donate'
                  className='block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Donate Now
                </a>
              </li>

              <li>
                <a
                  href='/contact'
                  className='block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Contact
                </a>
              </li>
            </ul>          
            </div>        
          </div>
        </div>
    </nav>
  );
};

export default Navbar;

