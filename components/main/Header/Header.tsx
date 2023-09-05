'use client';

import React, { useState } from 'react';
import { StaticImageData } from 'next/image';
import LogoSection from '@/components/main/Header/LogoSection';
import MotoSection from '@/components/main/Header/MotoSection';
import MenuSection from '@/components/main/Header/MenuSection';

export interface HeaderProps {
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
      <LogoSection logo={logo} logoWidth={logoWidth} />
      <MotoSection headerMoto={headerMoto} />
      <MenuSection
        isMenuOpen={isMenuOpen}
        openMobileMenu={openMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
    </header>
  );
};

export default Header;
