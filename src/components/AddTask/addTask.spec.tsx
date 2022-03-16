import React from 'react';
import { render } from '@testing-library/react';
import { AddTask } from '.';
import { IconMain } from '../../commons/icons/Main';
import userEvent from '@testing-library/user-event';

describe('<AddTask />', () => {
  it('Button renders name correctly', () => {
    const {getByRole} = render(
      <AddTask
        Icon={IconMain.FaPlusCircle}
        label="Add Task"
      />
    )
    const buttonElement = getByRole('button', {
      name: /Add Task/
    })

    expect(buttonElement).toBeInTheDocument();
  })
  it('should render with icon', () => {
    const {getByTestId} = render(
      <AddTask
        Icon={IconMain.FaPlusCircle}
        label="Add Task"
      />
    )

    expect(getByTestId('icon')).toBeInTheDocument();
  })
})
