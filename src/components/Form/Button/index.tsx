import React from 'react';
import { Container } from './styles';

interface Props {
  title: string
}

export function Button({title}: Props) {
  return(
    <Container>
      <span>{title}</span>
    </Container>
  )
}