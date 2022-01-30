import React, { InputHTMLAttributes } from 'react'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input({ ...rest}: InputProps) {
  return (
    <Container>
      <input {...rest} />
    </Container>
  )
}