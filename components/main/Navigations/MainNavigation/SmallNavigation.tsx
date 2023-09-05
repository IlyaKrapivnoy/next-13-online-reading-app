import React, { ReactNode } from 'react';
import { navigation } from '@/data/header';
import Link from 'next/link';

const SmallNavigation = () => {
  return (
    <nav className='flex w-1/5 justify-center'>
      <ul className='flex flex-col text-xl'>
        {navigation.map(
          ({ href, name }: { href: string; name: string }): ReactNode => (
            <Link href={href} key={name} className='hover:text-red-500'>
              {name}
            </Link>
          )
        )}
      </ul>
    </nav>
  );
};

export default SmallNavigation;
