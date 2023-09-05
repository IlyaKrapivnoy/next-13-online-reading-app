'use client';

import React, { ReactNode, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import MenuIcon from '../../../public/menu-icon.png';
import CloseIcon from '../../../public/cross-icon.png';
import ArrowIcon from '../../../public/arrow-icon.png';
import Link from 'next/link';
import { navigation } from '@/data/header';
import { usePathname } from 'next/navigation';

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
          <div
            className={
              'absolute top-0 bottom-0 right-0 left-0 bg-gray-50 flex justify-center items-center'
            }
          >
            <nav className='relative flex flex-col text-2xl font-black'>
              {navigation.map(
                ({ href, name }: { href: string; name: string }): ReactNode => (
                  <div className='flex items-center my-2' key={name}>
                    <Image
                      src={ArrowIcon}
                      width={26}
                      alt='active link icon'
                      className={`${
                        isActiveLink(href) ? 'opacity-100' : 'opacity-0'
                      } mr-4`}
                    />
                    <Link
                      key={name}
                      href={href}
                      className={`hover:text-gray-600 ${
                        isActiveLink(href)
                          ? 'text-red-500 hover:text-red-500'
                          : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {name}
                    </Link>
                  </div>
                )
              )}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
