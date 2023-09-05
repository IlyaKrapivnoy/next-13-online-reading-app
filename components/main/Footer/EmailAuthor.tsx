import React from 'react';
import Image from 'next/image';
import Skull from '@/public/skull.png';
import Link from 'next/link';

const EmailAuthor = () => {
  return (
    <div className='flex items-center w-2/5'>
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
  );
};

export default EmailAuthor;
