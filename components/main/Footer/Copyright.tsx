import React from 'react';
import { currentYear } from '@/app/utils';

const Copyright = () => {
  return (
    <div className='text-sm'>
      &copy; Inner Town Library, {currentYear}
      <br />{' '}
      <span className='italic'>
        hooligan association of sophisticated readers
      </span>
    </div>
  );
};

export default Copyright;
