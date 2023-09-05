import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import MenuIcon from '@/public/menu-icon.png';
import CloseIcon from '@/public/cross-icon.png';
import MainNavigation from '@/components/main/Navigations/MainNavigation/MainNavigation';

interface MenuSectionProps {
  isMenuOpen: boolean;
  openMobileMenu: MouseEventHandler;
  closeMobileMenu: MouseEventHandler;
}
const MenuSection: React.FC<MenuSectionProps> = ({
  isMenuOpen,
  openMobileMenu,
  closeMobileMenu
}) => {
  return (
    <>
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
    </>
  );
};

export default MenuSection;
