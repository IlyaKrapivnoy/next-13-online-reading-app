import Image from 'next/image';
import Logo from '../../../../public/logo-black-transparent-hat-3.png';

const Header = () => {
  return (
    <div className='flex justify-between items-center min-h-[100px] border-b-[6px] border-black'>
      <Image src={Logo} alt='Logo' width='170' />
      <div className='font-black text-xl'>
        There is a place where you can read even after midnight
      </div>
      <div className='cursor-pointer'>
        <div className='w-10 h-1 bg-black mb-1'></div>
        <div className='w-10 h-1 bg-black mb-1'></div>
        <div className='w-10 h-1 bg-black'></div>
      </div>
    </div>
  );
};

export default Header;
