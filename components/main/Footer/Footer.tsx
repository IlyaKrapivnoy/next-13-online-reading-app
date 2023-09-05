import React from 'react';
import EmailAuthor from '@/components/main/Footer/EmailAuthor';
import Copyright from '@/components/main/Footer/Copyright';
import SmallNavigation from '@/components/main/Navigations/MainNavigation/SmallNavigation';

interface FooterProps {
  className: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`${className} flex justify-between items-center min-h-[100px] border-t-[6px] border-black w-full`}
    >
      <EmailAuthor />
      <SmallNavigation />
      <Copyright />
    </footer>
  );
};

export default Footer;
