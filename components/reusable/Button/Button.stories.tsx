import React from 'react';
import { LinkButton, LinkButtonProps } from './Button';

export default {
  title: 'Button',
  component: LinkButton
};

export const Default: React.FC<LinkButtonProps> = () => (
  <LinkButton href='/' title='Click me' />
);
