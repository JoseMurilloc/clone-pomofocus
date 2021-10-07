import React, { ButtonHTMLAttributes } from 'react'
import {Container} from './styles'

interface ButtonOptionalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  activeButton: boolean
  label: string
  status: 'pomodoro' | 'short_break' | 'long_break'
  typePomo: 'pomodoro' | 'short_break' | 'long_break',
  setTypePomo: any;
}

export function ButtonOptional({
  activeButton, label, status, typePomo, setTypePomo, ...rest
}: ButtonOptionalProps) {

  const handleEnablePomodoroButtonStyle = React.useCallback(() => {
    return typePomo === status
  }, [typePomo, status]) 

  const handleSelectedTypePomo = React.useCallback(() => {
    setTypePomo(status)
  }, [setTypePomo, status])

  return (
    <Container 
      disabled={activeButton} 
      enableButton={handleEnablePomodoroButtonStyle()} 
      onClick={handleSelectedTypePomo}
      types={typePomo}
      {...rest}
    >
      {label}
    </Container>
  )
}