import React from 'react';
import { currentYear } from '@/helpers';

const Copyright = () => {
  return (
    <div className='flex flex-col text-lg w-2/5 items-end'>
      &copy; Inner Town Library, {currentYear}
      <br />{' '}
      <span className='italic'>
        hooligan association of sophisticated readers
      </span>
    </div>
  );
};

export default Copyright;
