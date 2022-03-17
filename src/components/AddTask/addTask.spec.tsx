import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddTask } from '.';
import { IconMain } from '../../commons/icons/Main';
import userEvent from '@testing-library/user-event';

describe('<AddTask />', () => {
  it('Button renders name correctly', () => {
    render(
      <AddTask
        Icon={IconMain.FaPlusCircle}
        label="Add Task"
      />
    )
    const buttonElement = screen.getByRole('button', {
      name: /Add Task/
    })

    expect(buttonElement).toBeInTheDocument();
  })
  it('should render with icon', () => {
    render(
      <AddTask
        Icon={IconMain.FaPlusCircle}
        label="Add Task"
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  })
})
