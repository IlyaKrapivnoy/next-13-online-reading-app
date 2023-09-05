'use client';

import React, { ReactNode, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import MenuIcon from '../../../public/menu-icon.png';
import CloseIcon from '../../../public/cross-icon.png';
import ArrowIcon from '../../../public/arrow-icon.png';
import Link from 'next/link';
import { navigation } from '@/data/header';
import { usePathname } from 'next/navigation';
import MainNavigation from '@/components/main/Navigations/MainNavigation/MainNavigation';

interface HeaderProps {
  logo: StaticImageData;
  logoWidth: number;
  headerMoto: string;
}

const Header: React.FC<HeaderProps> = ({ logo, logoWidth, headerMoto }) => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBodyOverflow = (overflow: boolean) => {
    document.body.classList.toggle('overflow-hidden', overflow);
  };

  const openMobileMenu = () => {
    setIsMenuOpen(true);
    toggleBodyOverflow(true);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    toggleBodyOverflow(false);
  };

  const isActiveLink = (href: string): Boolean => pathName === href;

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
