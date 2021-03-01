import * as React from 'react';

import { Container } from './styles';

function CountDownButton({ children, startCountdown, typePomo, activeButton, ...rest }) {
  return (
    <Container typePomo={typePomo} activeButton={activeButton} onClick={startCountdown} {...rest}>
      {!activeButton ? 'START' : 'STOP'}
    </Container>
  )
}

export default CountDownButton;