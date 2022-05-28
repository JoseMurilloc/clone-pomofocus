import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from '.';
import userEvent from '@testing-library/user-event';
import { Providers } from '../../utils/providersTest';

describe('<Home />', () => {
  it('should able show the cardAddTask in page on click buttonAddTask', () => {

    render(
      <Providers>
        <Home/>
      </Providers>
    )

    const buttonAddTask = screen.getByRole('button', {
      name: /Add Task/
    })

    userEvent.click(buttonAddTask)

    expect(screen.getByTestId('card-add-task')).toBeInTheDocument();
  })

  it('should able a NOT show the cardAddTask in page on click buttonAddTask', () => {

    render(
      <Providers>
        <Home/>
      </Providers>
    )
    const cardAddTask = screen.queryByTestId('card-add-task')

    expect(cardAddTask).not.toBeInTheDocument();
  })

  it('should be able open and close the card add task', () => {
    render(
      <Providers>
        <Home/>
      </Providers>
    )

    userEvent.click(screen.getByRole('button', {name: /Add Task/}))

    expect(screen.getByTestId('card-add-task')).toBeInTheDocument();

    const buttonCancel =  screen.getByRole('button', {
      name: /Cancel/
    })

    userEvent.click(buttonCancel)

    expect(screen.queryByTestId('card-add-task'))
      .not.toBeInTheDocument();

  })


  it('not should be able submit new task without title', async () => {
    render(
      <Providers>
        <Home/>
      </Providers>
    )


    const buttonAddTask = screen.getByTestId('add-task')

    userEvent.click(buttonAddTask)

    const buttonSaveTask = screen.getByRole('button', {
      name: /Save/
    })

    userEvent.click(buttonSaveTask)

    expect(screen.queryByTestId('card-task')).not.toBeInTheDocument()

  })
})
