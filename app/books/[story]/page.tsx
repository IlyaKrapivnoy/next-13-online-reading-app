'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { transformUrlToTitle } from '@/helpers';

const Story = () => {
  const pathName: string = usePathname();

  return <div>{transformUrlToTitle(pathName)}</div>;
};

export default Story;
