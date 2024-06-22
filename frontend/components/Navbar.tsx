"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import logo from './images/Logo.png';
import Frame from './images/Frame.png';

function Navbar() {
  // Initialize theme state with default 'dark'
  const [theme, setTheme] = useState('dark'); // Set default theme to 'dark'

  // Function to toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark'); // Add 'dark' class to HTML element
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from HTML element
    }
  };

  // Effect to add or remove 'dark' class from HTML element based on theme state
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const [navbar, setNavbar] = useState(false);

  return (
    <div className={`bg-${theme === 'light' ? 'white' : 'black'} text-${theme === 'light' ? 'black' : 'white'} flex justify-between border-b-2 border-gray-700 flex-row`}>
      <div className='flex flex-row mt-1  md:ml-20'>
        <div className='w-6 mt-2 '>
          <Image alt="Logo" className='' src={logo} />
        </div>
        <h1 className='p-2 ml-1 text-lg mr-4 md:block hidden'>Programming Pathshala</h1>
        <h1 className='p-2 ml-1 text-lg mr-4 md:hidden block'>PPA</h1>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? 'p-12 md:p-0 block' : 'hidden'
          }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex ">
            <li className="pb-6 text-lg py-2 md:px-4 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="#about" >
                About
              </Link>
            </li>
            <li className="pb-6 text-lg py-2 px-4 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="#blog" >
                Blogs
              </Link>
            </li>
            <li className="pb-6 text-lg py-2 px-4 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="#contact" >
                Contact
              </Link>
            </li>
            <li className="pb-6 text-lg py-2 px-4 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="#projects" >
                Projects
              </Link>
            </li>
            <li className="pb-6 text-lg py-2 px-4 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="#projects" >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row mt-1 mb-1'>
        <div id='toggle-button' className='md:text-2xl text-xl p-2 cursor-pointer' onClick={toggleTheme}>
          {theme === 'light' ? '🌕' : '🌑'}
        </div>
        <Link href="/" className={` ${navbar ? 'hidden' : 'block'}`}>
          <h2 className="text-lg text-black dark:text-white hover:text-cyan-600 p-2 font-bold">Login</h2>
        </Link>
        <Link href="/signup" className={` ${navbar ? 'hidden' : 'block'}`}>
          <h2 className="text-lg mt-2 md:mr-10 pl-1 pr-1 text-black font-bold bg-white rounded md:ml-2">Signup</h2>
        </Link>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image src="/close.svg" width={30} height={30} alt="close" />
            ) : (
              <Image src={Frame} width={20} height={20} alt="menu" className="focus:border-none active:border-none" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
