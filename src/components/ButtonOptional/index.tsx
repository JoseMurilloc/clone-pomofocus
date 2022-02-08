import React, { ButtonHTMLAttributes, Dispatch } from 'react'
import { Status } from '../../commons/types/status'
import {Container} from './styles'

interface ButtonOptionalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  activeButton: boolean
  label: string
  status: Status
  typePomo: Status,
  setTypePomo: Dispatch<React.SetStateAction<Status>>;
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