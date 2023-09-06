import React from 'react';
import { ButtonProps, LinkButton } from './Button';

export default {
  title: 'Button',
  component: LinkButton
};

export const Default: React.FC<ButtonProps> = () => (
  <LinkButton href='/' title='Click me' />
);
