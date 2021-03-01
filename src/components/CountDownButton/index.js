import * as React from 'react';

import { Container } from './styles';

function CountDownButton({ children, startCountdown, activeButton, ...rest }) {
  return (
    <Container activeButton={activeButton} onClick={startCountdown} {...rest}>
      {!activeButton ? 'START' : 'STOP'}
    </Container>
  )
}

export default CountDownButton;