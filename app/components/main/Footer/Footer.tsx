import React from 'react';
import Link from 'next/link';
import Skull from '../../../../public/skull.png';
import Image from 'next/image';
import { currentYear } from '@/app/utils';
import { className } from 'postcss-selector-parser';

interface FooterProps {
  className: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`${className} flex justify-between items-center min-h-[100px] border-t-[6px] border-black`}
    >
      <div className='flex items-center'>
        <Image src={Skull} width={90} alt='ds' className='scale-x-[-1] mr-10' />
        <div className='mr-8 font-black text-lg'>
          <p>Want to talk to me?</p>
          <p>Send an email</p>
        </div>
        <div>
          <Link
            className='border-[3px] border-black py-[10px] px-[20px] hover:shadow-custom transition-shadow'
            href='mailto:example@example.com'
          >
            Email Author
          </Link>
        </div>
      </div>
      <p className='text-sm'>
        &copy; Inner Town Library, {currentYear}
        <br />{' '}
        <span className='italic'>
          hooligan association of sophisticated readers
        </span>
      </p>
    </footer>
  );
};

export default Footer;
