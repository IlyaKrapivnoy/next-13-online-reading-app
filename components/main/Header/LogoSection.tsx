import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeaderProps } from '@/components/main/Header/Header';

const LogoSection: React.FC<Pick<HeaderProps, 'logo' | 'logoWidth'>> = ({
  logo,
  logoWidth
}) => {
  return (
    <div className='w-1/5'>
      <Link href='/'>
        <Image src={logo} alt='Logo' width={logoWidth} />
      </Link>
    </div>
  );
};

export default LogoSection;
