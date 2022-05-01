import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';
import userEvent from '@testing-library/user-event';
import { Providers } from '../../utils/providersTest';

describe('<Header />', () => {
  it('should open and close menu correctly', () => {
    render(<Header  typePomodoro="pomodoro"/>, {
      wrapper: Providers
    })

    const buttonMenu = screen.getByTestId('button-toggle-menu');
    userEvent.click(buttonMenu)

    expect(screen.getByTestId('menu-profile')).toBeInTheDocument()
    userEvent.click(buttonMenu)
    expect(screen.queryByTestId('menu-profile')).not.toBeInTheDocument()

  });
})


