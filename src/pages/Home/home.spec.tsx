import React from 'react';
import { render, screen } from '@testing-library/react';
import {  Home } from '.';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';


describe('<Home />', () => {
  it('should able show the cardAddTask in page on click buttonAddTask', () => {

    const { getByRole, getByTestId } = render(
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    )

    const buttonAddTask = getByRole('button', {
      name: /Add Task/
    })

    userEvent.click(buttonAddTask)

    expect(getByTestId('card-add-task')).toBeInTheDocument();
  })

  it('should able a NOT show the cardAddTask in page on click buttonAddTask', () => {

    render(
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    )
    const cardAddTask = screen.queryByTestId('card-add-task')

    expect(cardAddTask).not.toBeInTheDocument();
  })
})
