import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface CountDownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typePomo: 'pomodoro' | 'short_break' | 'long_break'
  activeButton: boolean
  startCountdown?: () => void; 
}


function CountDownButton({ 
  startCountdown, typePomo, activeButton, ...rest 
}: CountDownButtonProps) {

  return (
    <Container 
      typePomo={typePomo} 
      activeButton={activeButton} 
      onClick={startCountdown} 
      {...rest}
    >
      {!activeButton ? 'START' : 'STOP'}
    </Container>
  )
}

export default CountDownButton;