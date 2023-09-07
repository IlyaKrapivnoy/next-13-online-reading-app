import React from 'react';
import {
  LinkButton,
  LinkButtonProps,
  RegularButton,
  RegularButtonProps
} from './Button';

export default {
  title: 'Button',
  component: LinkButton
};

export const LinkBtn: React.FC<LinkButtonProps> = () => (
  <LinkButton href='/' title='Link btn' />
);

export const RegularBtn: React.FC<RegularButtonProps> = () => (
  <RegularButton onClick={() => {}} title='Btn with onClick' />
);
