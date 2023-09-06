import React from 'react';
import Image from 'next/image';
import Skull from '@/public/skull.png';
import { LinkButton } from '@/components/reusable/Button/Button';

const EMAIL_AUTHOR: string = 'mailto:example@example.com';
const EmailAuthor = () => {
  return (
    <div className='flex items-center w-2/5'>
      <Image src={Skull} width={90} alt='ds' className='scale-x-[-1] mr-10' />
      <div className='mr-8 font-black text-lg'>
        <p>Want to talk to me?</p>
        <p>Send an email</p>
      </div>
      <div>
        <LinkButton title='Email Author' href={EMAIL_AUTHOR} />
      </div>
    </div>
  );
};

export default EmailAuthor;
