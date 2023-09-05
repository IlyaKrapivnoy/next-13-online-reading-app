import React from 'react';
import EmailAuthor from '@/components/main/Footer/EmailAuthor';
import Copyright from '@/components/main/Footer/Copyright';

interface FooterProps {
  className: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`${className} flex justify-between items-center min-h-[100px] border-t-[6px] border-black`}
    >
      <EmailAuthor />
      <Copyright />
    </footer>
  );
};

export default Footer;
