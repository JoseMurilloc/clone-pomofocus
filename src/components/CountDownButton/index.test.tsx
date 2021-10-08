import React from 'react'
import { render, screen } from '@testing-library/react'
import CountDownButton from '.'

describe('<CountDownButton />', () => {
  it('Should have show up label button START', () => {
    render(
      <CountDownButton typePomo='pomodoro' activeButton={false} />
    )

    expect(screen.getByText(/START/i))
  })

  it('Should have show up label button STOP', () => {
    render(
      <CountDownButton typePomo='pomodoro' activeButton={true} />
    )

    expect(screen.getByText(/STOP/i))
  })
})