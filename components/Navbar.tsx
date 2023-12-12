'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/assets/logoTitle.webp";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import saham from "../public/assets/profilepic.jpg";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from 'react';

const links = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact Us' },
  { href: 'https://portfolio-sahamahmeds-projects.vercel.app/', text: 'Expertise' },
];


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full lg:h-[80px] h-[64px] bg-slate-800 z-10 flex justify-between items-center gap-4 p-[15px] border-b-[2px] border-gray-300 text-lg font-bold pr-[20px] text-white fixed top-0 shadow-md opacity-100">
      <div className="text-xl text-center">
        <Image src={logo} alt="logo" width={100} height={100} className="rounded-full lg:h-12 lg:w-12 h-10 w-10" />
      </div>
      <div>
        <ul
          className={`hidden md:inline-flex md:flex-row md:gap-4 md:cursor-pointer md:p-2 md:justify-center md:items-center ${
            menuOpen ? 'hidden' : 'block'
          }`}
        >
           {links.map((link, index) => (
            <li key={index} className="hover:border-b-[2px] hover:border-white-500">
              <Link href={link.href} 
                
                  className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-lg font-xl  ',
                    {
                      ' text-blue-600 font-2xl': pathname === link.href,
                    },
                  )}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {link.text}
                
              </Link>
            </li>
          ))}

        </ul>
      </div>


      <div className="relative inline-flex md:hidden hover:shadow-md hover:shadow-slate-200 cursor-pointer">
        {menuOpen ? (
          <IoIosClose className="text-4xl" onClick={toggleMenu} />
        ) : (
          <IoIosMenu className="text-4xl" onClick={toggleMenu} />
        )}
        {menuOpen && (
          <div className="absolute top-12 right-0 bg-slate-800 p-2 shadow-md w-32 text-md shadow-slate-200">
            {/* Dropdown content */}
            <ul className="flex flex-col gap-2">
              <li className='hover:border-y-[2px] hover:border-white-500 text-center'>
                <Link href="/" onClick={() => setMenuOpen(!menuOpen)}>Home</Link>
              </li>
              <li className='hover:border-y-[2px] hover:border-white-500'>
                <Link href="/contact" onClick={() => setMenuOpen(!menuOpen)}>Contact Us</Link>
              </li>
              <li className='hover:border-y-[2px] hover:border-white-500'>
                <a href="https://portfolio-sahamahmeds-projects.vercel.app/" target="_blank" onClick={() => setMenuOpen(!menuOpen)}>
                <Image src={saham} alt="saham" width={45} height={40} className="rounded-full border-blue-600 border-2 mx-auto my-1" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;




