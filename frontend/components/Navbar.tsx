
// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from './images/Logo.png';
import Frame from './images/Frame.png';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='bg-black text-white flex justify-between flex-row'>
        <div className='flex flex-row mt-1 mb-1 md:ml-20'>
            <div className='w-6 mt-2 '>
                <Image alt="" className='' src={logo}/>
                
            </div>
            <h1 className='p-2 ml-1 text-lg mr-4 md:block hidden'>Programming Pathshala     </h1>
            <h1 className='p-2 ml-1 text-lg mr-4 md:hidden block '>PPA</h1>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-lg text-white py-2 md:px-4 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-6 text-lg text-white py-2 px-4 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
        </div>
        {/*  */}
        <div className='flex flex-row mt-1 mb-1'>
           <Link href=""><div className=' md:text-2xl text-xl p-2'>🌕</div></Link>
        <Link href="/" className={` ${
                navbar ? 'hidden' : 'block'
              }`}>
                <h2 className="text-lg text-cyan-600 p-2 font-bold ">Login</h2>
              </Link>
              <Link href="/" className={` ${
                navbar ? 'hidden' : 'block'
              }`}>  
                <h2 className="text-lg mt-2 md:mr-10 pl-1 pr-1 text-black font-bold bg-white rounded md:ml-2 ">Signup</h2>
              </Link>
{/* button */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={Frame}
                      width={20}
                      height={20}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
        </div>
    </div>
   
  );
}

export default Navbar;

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// function Navbar() {
//   const [navbar, setNavbar] = useState(false);

//   return (
//     <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
//       <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//         <div>
//           <div className="flex items-center justify-between py-3 md:py-5 md:block">
//             <Link href="/">
//               <div className="text-2xl text-cyan-600 font-bold">Programming Pathshala</div>
//             </Link>
//             <div className="md:hidden">
//               <button
//                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <Image src="/close.svg" width={30} height={30} alt="close" />
//                 ) : (
//                   <Image src="/hamburger-menu.svg" width={30} height={30} alt="menu" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//               navbar ? 'block' : 'hidden'
//             }`}
//           >
//             <ul className="items-center justify-center md:flex md:space-x-6">
//               <li className="text-white md:hover:text-purple-600">
//                 <Link href="/docs">Docs</Link>
//               </li>
//               <li className="text-white md:hover:text-purple-600">
//                 <Link href="/pricing">Pricing</Link>
//               </li>
//               <li className="text-white md:hover:text-purple-600">
//                 <Link href="/status">Status</Link>
//               </li>
//               <li className="text-white md:hover:text-purple-600">
//                 <Link href="/faqs">FAQs</Link>
//               </li>
//               <li className="text-white md:hover:text-purple-600">
//                 <Link href="/contact">Contact Us</Link>
//               </li>
//             </ul>
//             <div className="mt-3 space-y-2 md:hidden">
//               <Link href="/login">
//                 <div className="block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md">Login</div>
//               </Link>
//               <Link href="/signup">
//                 <div className="block w-full px-4 py-2 text-center text-black bg-white rounded-md">Sign Up</div>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="hidden md:flex space-x-2">
//           <Link href="/login">
//             <div className="px-4 py-2 text-white">Login</div>
//           </Link>
//           <Link href="/signup">
//             <div className="px-4 py-2 text-black bg-white rounded-md">Sign Up</div>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
