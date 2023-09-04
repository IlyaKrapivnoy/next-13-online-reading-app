'use client';

import { useState } from 'react';
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
    <div className='flex justify-between items-center min-h-[100px] border-b-[6px] border-black'>
      <Image src={logo} alt='Logo' width={logoWidth} />
      <div className='font-black text-xl'>{headerMoto}</div>
      {!isMenuOpen ? (
        <Image
          src={Menu}
          width={30}
          onClick={() => setIsMenuOpen(true)}
          alt='menu icon'
        />
      ) : (
        <>
          <Image
            src={Close}
            width={30}
            onClick={() => setIsMenuOpen(false)}
            alt='menu icon'
            className='z-10'
          />
          <div
            className={
              'absolute top-0 bottom-0 right-0 left-0 bg-gray-50 flex justify-center items-center'
            }
          >
            <nav className='flex flex-col text-2xl font-black '>
              <Link href='/' className='hover:text-gray-600'>
                Home
              </Link>
              <Link href='/' className='hover:text-gray-600'>
                About
              </Link>
              <Link href='/' className='hover:text-gray-600'>
                Contact
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
