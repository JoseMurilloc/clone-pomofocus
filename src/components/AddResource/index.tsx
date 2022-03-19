import React, { ButtonHTMLAttributes } from 'react';
import { FaLock } from 'react-icons/fa';
import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  block?: boolean;
}

export function AddResource({label, block = false, ...rest}: Props) {
  return (
    <Container {...rest}>
      <span>{label}</span>
      {!!block && (
        <FaLock size={13} color="#8d8d8d" />
      )}
    </Container>
  )
}
