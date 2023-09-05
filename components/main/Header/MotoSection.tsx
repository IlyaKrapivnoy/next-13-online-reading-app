import React from 'react';
import { HeaderProps } from '@/components/main/Header/Header';

const MotoSection: React.FC<Pick<HeaderProps, 'headerMoto'>> = ({
  headerMoto
}) => <div className='w-3/5 font-black text-xl text-center'>{headerMoto}</div>;

export default MotoSection;
