'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Menu from '../../../../public/menu-icon.png';
import Close from '../../../../public/cross-icon.png';
import Link from 'next/link';

interface HeaderProps {
  logo: StaticImageData;
  logoWidth: number;
  headerMoto: string;
}

const Header: React.FC<HeaderProps> = ({ logo, logoWidth, headerMoto }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex justify-between items-center min-h-[100px] border-b-[6px] border-black'>
      <div className='w-1/5'>
        <Link href='/'>
          <Image src={logo} alt='Logo' width={logoWidth} />
        </Link>
      </div>
      <div className='w-3/5 font-black text-xl text-center'>{headerMoto}</div>
      {!isMenuOpen ? (
        <div className='w-1/5 flex justify-end'>
          <Image
            src={Menu}
            width={30}
            onClick={() => setIsMenuOpen(true)}
            alt='menu icon'
            className='cursor-pointer '
          />
        </div>
      ) : (
        <>
          <Image
            src={Close}
            width={30}
            onClick={() => setIsMenuOpen(false)}
            alt='menu icon'
            className='cursor-pointer z-10'
          />
          <div
            className={
              'absolute top-0 bottom-0 right-0 left-0 bg-gray-50 flex justify-center items-center'
            }
          >
            <nav className='flex flex-col text-2xl font-black '>
              <Link href='/' as='style' className='hover:text-gray-600'>
                Home
              </Link>
              <Link href='/' as='style' className='hover:text-gray-600'>
                About
              </Link>
              <Link href='/' as='style' className='hover:text-gray-600'>
                Contact
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
