import React from 'react';
import { render, screen } from '@testing-library/react';
import { AddTask } from '.';
import { Icon } from '../../commons/icons/Main';

describe('<AddTask />', () => {
  it('Button renders name correctly', () => {
    render(
      <AddTask
        Icon={Icon.FaPlusCircle}
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
        Icon={Icon.FaPlusCircle}
        label="Add Task"
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  })
})
