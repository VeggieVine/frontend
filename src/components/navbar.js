import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbLogin2 } from "react-icons/tb";
import { IoMdPersonAdd, IoMdCart } from "react-icons/io";

export default function Navbar() {
  const [navbarBg, setNavbarBg] = useState('bg-white');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 20) {
        setNavbarBg('bg-white shadow-xl');
      } else {
        setNavbarBg('bg-white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navbarBg} text-secondary font-medium text-lg w-full fixed top-0 z-50 transition-all duration-300 h-[80px]`}>
      <div className='flex justify-between px-12 h-[80px] items-center'>
        <div className='inline-flex space-x-12'>
          <Link className='' href='/'>
            <Image
              src='/assets/image/logo.svg'
              alt='Brand Logo'
              height='55'
              width='165'
              className=''
            />
          </Link>
          <div className='space-x-4'>
            <Link href='/'>
              Home
            </Link>
            <Link href='/product'>
              Products
            </Link>
            <Link href='/about'>
              Manfaat
            </Link>
            <Link href='/contact'>
              Contact
            </Link>
          </div>
        </div>
        <div className='space-x-4'>
          <Link href='/login' className='inline-flex space-x-2 items-center px-2.5 py-1.5 border-2 border-tertiary rounded-2xl shadow-lg'>
            <TbLogin2 size='20'/>
            <p className='text-base'>Login</p>
          </Link>
          <Link href='/register' className='inline-flex space-x-2 items-center px-2.5 py-1.5 border-2 border-tertiary rounded-2xl shadow-lg'>
          <IoMdPersonAdd size='20'/>
            <p className='text-base'>Register</p>
          </Link>
          <Link href='/cart' className='inline-flex space-x-2 items-center px-2.5 py-1.5 border-2 border-tertiary rounded-2xl shadow-lg'>
          <IoMdCart size='20'/>
            <p className='text-base'>lenght</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
