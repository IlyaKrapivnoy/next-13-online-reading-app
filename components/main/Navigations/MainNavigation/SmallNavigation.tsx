'use client';

import React, { ReactNode } from 'react';
import { navigation } from '@/data/header';
import Link from 'next/link';
import useIsActiveLink from '@/hooks/useIsActiveLink';
import ArrowIcon from '@/public/arrow-icon.png';
import Image from 'next/image';

const SmallNavigation = () => {
  const isActiveLink = useIsActiveLink();

  return (
    <nav className='flex w-1/5 justify-center'>
      <ul className='flex flex-col text-xl'>
        {navigation.map(
          ({ href, name }: { href: string; name: string }): ReactNode => (
            <div className='flex items-center my-0.5' key={name}>
              <Image
                src={ArrowIcon}
                width={26}
                alt='active link icon'
                className={`${
                  isActiveLink(href) ? 'opacity-100' : 'opacity-0'
                } mr-4`}
              />
              <Link
                href={href}
                key={name}
                className={`hover:text-gray-600 ${
                  isActiveLink(href) ? 'text-red-500 hover:text-red-500' : ''
                }`}
              >
                {name}
              </Link>
            </div>
          )
        )}
      </ul>
    </nav>
  );
};

export default SmallNavigation;
