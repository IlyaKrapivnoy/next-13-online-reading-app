'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { transformUrlToTitle } from '@/helpers';
import Image from 'next/image';
import Skull from '@/public/skull.png';

const Story = () => {
  const pathName: string = usePathname();

  return (
    <div className='mt-14'>
      {/*title*/}
      <div className='flex items-center justify-center'>
        <Image src={Skull} width={30} alt='ds' className='scale-x-[-1] mr-4' />
        <span className='text-center font-black text-3xl'>
          {transformUrlToTitle(pathName)}
        </span>
        <Image src={Skull} width={30} alt='ds' className='ml-4' />
      </div>
    </div>
  );
};

export default Story;
