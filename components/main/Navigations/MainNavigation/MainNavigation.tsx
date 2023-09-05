import React, { MouseEventHandler, ReactNode } from 'react';
import { navigation } from '@/data/header';
import Image from 'next/image';
import ArrowIcon from '@/public/arrow-icon.png';
import Link from 'next/link';
import useIsActiveLink from '@/hooks/useIsActiveLink';

interface MainNavigationProps {
  handleCloseMobileMenu: MouseEventHandler;
}
const MainNavigation: React.FC<MainNavigationProps> = ({
  handleCloseMobileMenu
}) => {
  const isActiveLink = useIsActiveLink();

  return (
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
                  isActiveLink(href) ? 'text-red-500 hover:text-red-500' : ''
                }`}
                onClick={handleCloseMobileMenu}
              >
                {name}
              </Link>
            </div>
          )
        )}
      </nav>
    </div>
  );
};

export default MainNavigation;
