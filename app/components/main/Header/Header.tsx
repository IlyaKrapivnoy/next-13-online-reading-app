import Image, { StaticImageData } from 'next/image';

interface HeaderProps {
  logo: StaticImageData;
  logoWidth: number;
  headerMoto: string;
}

const Header: React.FC<HeaderProps> = ({ logo, logoWidth, headerMoto }) => {
  return (
    <div className='flex justify-between items-center min-h-[100px] border-b-[6px] border-black'>
      <Image src={logo} alt='Logo' width={logoWidth} />
      <div className='font-black text-xl'>{headerMoto}</div>
      <div className='cursor-pointer'>
        <div className='w-10 h-1 bg-black mb-1'></div>
        <div className='w-10 h-1 bg-black mb-1'></div>
        <div className='w-10 h-1 bg-black'></div>
      </div>
    </div>
  );
};

export default Header;
