import Image from 'next/image';
import ClickableImg from '../public/full-inner-b.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex justify-center items-center min-h-[800px]'>
      <Link href='/'>
        <Image src={ClickableImg} width={400} alt='Clickable image' />
      </Link>
    </div>
  );
}
