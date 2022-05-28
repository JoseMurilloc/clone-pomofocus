import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { CardAddTask } from '.';
import userEvent from '@testing-library/user-event';
import { Providers } from '../../utils/providersTest';

describe('<CardAddTask />', () => {

  it('should be able of close card add task on click and cancel', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>, { wrapper: Providers })

    const buttonCancel = screen.getByRole('button', {
      name: /Cancel/
    })

    userEvent.click(buttonCancel)

    expect(onVisibleMock).toHaveBeenCalledTimes(1)
  });

  it('should render and show correctly note resource', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>, { wrapper: Providers })

    const buttonAddResource = screen.getByRole('button', {
      name: "+ Add project"
    })
    expect(buttonAddResource).toBeInTheDocument();

    expect(screen.queryByTestId('note-est-pomodoro')).not.toBeInTheDocument()
  });

  it('should be able on click in addResource show in page note resource', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>, { wrapper: Providers })

    const buttonAddNote = screen.getByRole('button', {
      name: "+ Add note"
    })

    userEvent.click(buttonAddNote)

    expect(screen.queryByRole('button', {name: "+ Add note"}))
      .not.toBeInTheDocument();

    expect(screen.getByTestId('note-est-pomodoro')).toBeInTheDocument()
  });

  it('should not be able decrement counter with number negative', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>, { wrapper: Providers })

    const buttonDecrementElement = screen.getByTestId('button-decrement')

    userEvent.click(buttonDecrementElement)
    userEvent.click(buttonDecrementElement)

    const inputCounterElement =  screen.getByTestId('input-counter')

    expect(inputCounterElement).toHaveValue(0)
  })

  it('should be able increment counter est', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>, { wrapper: Providers })

    const buttonIncrementElement = screen.getByTestId('button-increment')

    userEvent.click(buttonIncrementElement)
    userEvent.click(buttonIncrementElement)
    userEvent.click(buttonIncrementElement)

    const inputCounterElement =  screen.getByTestId('input-counter')

    expect(inputCounterElement).toHaveValue(4)
  })

  it('should be able clean form after submit new task success', async () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>, { wrapper: Providers })

    const buttonSaveTask = screen.getByRole('button', {
      name: /Save/
    })

    const buttonAddNote = screen.getByRole('button', {
      name: "+ Add note"
    })

    const buttonIncrement = screen.getByTestId('button-increment')

    const inputTitle = screen.getByPlaceholderText('What are your working on?')
    const inputEst = screen.getByTestId('input-counter');


    await userEvent.type(inputTitle, 'Initial task')

    userEvent.click(buttonAddNote)
    userEvent.click(buttonIncrement)

    const inputNote = screen.getByTestId('note-est-pomodoro');

    await userEvent.type(inputNote, 'Lorem ipsum')

    userEvent.click(buttonSaveTask)

    await waitFor(() => {
      expect(inputTitle).toHaveValue('')
    })

    await waitFor(() => {
      expect(inputNote).toHaveValue('')
    })
    expect(inputEst).toHaveValue(1)
  })
})


