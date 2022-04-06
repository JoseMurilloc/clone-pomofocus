import React from 'react'
import {Container} from './styles'
import { ButtonOptionalProps } from './types'

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
