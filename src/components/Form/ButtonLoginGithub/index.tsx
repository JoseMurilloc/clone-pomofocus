import React from 'react';
import { AiFillGithub } from 'react-icons/ai'

import { Container } from './styles';

export const ButtonLoginGithub: React.FC = () => {
  return (
    <Container>
      <AiFillGithub color="#222" size={20} />
      <span>Login with Github</span>
    </Container>
  );
}
