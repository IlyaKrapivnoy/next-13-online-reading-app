'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import MenuIcon from '../../../public/menu-icon.png';
import CloseIcon from '../../../public/cross-icon.png';
import Link from 'next/link';
import MainNavigation from '@/components/main/Navigations/MainNavigation/MainNavigation';

interface HeaderProps {
  logo: StaticImageData;
  logoWidth: number;
  headerMoto: string;
}

const Header: React.FC<HeaderProps> = ({ logo, logoWidth, headerMoto }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBodyOverflow = (overflow: boolean): void => {
    document.body.classList.toggle('overflow-hidden', overflow);
  };

  const openMobileMenu = (): void => {
    setIsMenuOpen(true);
    toggleBodyOverflow(true);
  };

  const closeMobileMenu = (): void => {
    setIsMenuOpen(false);
    toggleBodyOverflow(false);
  };

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
            src={MenuIcon}
            width={30}
            onClick={openMobileMenu}
            alt='menu icon'
            className='cursor-pointer'
          />
        </div>
      ) : (
        <>
          <Image
            src={CloseIcon}
            width={30}
            onClick={closeMobileMenu}
            alt='menu icon'
            className='cursor-pointer z-10'
          />
          <MainNavigation handleCloseMobileMenu={closeMobileMenu} />
        </>
      )}
    </header>
  );
};

export default Header;
