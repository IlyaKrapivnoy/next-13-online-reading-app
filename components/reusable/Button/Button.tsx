import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  href: string;
  title: string;
}
export const LinkButton: React.FC<ButtonProps> = ({ href, title }) => {
  return (
    <Link
      className='border-[3px] border-black py-[10px] px-[20px] hover:shadow-custom transition-shadow'
      href={href}
    >
      {title}
    </Link>
  );
};
