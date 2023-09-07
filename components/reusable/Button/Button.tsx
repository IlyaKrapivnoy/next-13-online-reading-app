import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  title: string;
}

export interface LinkButtonProps extends ButtonProps {
  href: string;
}

export interface RegularButtonProps extends ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, title }) => {
  return (
    <Link
      className='border-[3px] border-black py-[10px] px-[20px] hover:shadow-custom transition-shadow'
      href={href}
    >
      {title}
    </Link>
  );
};

export const RegularButton: React.FC<RegularButtonProps> = ({
  onClick,
  title
}) => {
  return (
    <button
      className='border-[3px] border-black py-[10px] px-[20px] hover:shadow-custom transition-shadow'
      onClick={onClick}
    >
      {title}
    </button>
  );
};
