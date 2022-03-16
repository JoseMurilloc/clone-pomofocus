import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';
import { IconMain } from '../../commons/icons/Main';
import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  Icon: IconType;
}

export function AddTask({label, Icon, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon data-testid="icon" size={20} color="#fff" />
      <span>{label}</span>
    </Container>
  )
}
