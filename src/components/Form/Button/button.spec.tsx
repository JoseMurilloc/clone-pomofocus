import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('Button renders name correctly', () => {
    render(<Button title="Log in with Email"/>);

    const buttonElement = screen.getByRole('button', {
      name: /Log in with Email/
    })

    expect(buttonElement).toBeInTheDocument();
  })

})
