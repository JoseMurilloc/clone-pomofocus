import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardAddTask } from '.';
import userEvent from '@testing-library/user-event';

describe('<CardAddTask />', () => {
  it('should be able of close card add task on click and cancel', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>)

    const buttonCancel = screen.getByRole('button', {
      name: /Cancel/
    })

    userEvent.click(buttonCancel)

    expect(onVisibleMock).toHaveBeenCalledTimes(1)
  });

  it('should render and show correctly note resource', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>)

    const buttonAddResource = screen.getByRole('button', {
      name: "+ Add project"
    })
    expect(buttonAddResource).toBeInTheDocument();

    expect(screen.queryByTestId('note-est-pomodoro')).not.toBeInTheDocument()
  });

  it('should be able on click in addResource show in page note resource', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>)

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

    render(<CardAddTask onVisible={onVisibleMock}/>)

    const buttonDecrementElement = screen.getByTestId('button-decrement')

    userEvent.click(buttonDecrementElement)
    userEvent.click(buttonDecrementElement)

    const inputCounterElement =  screen.getByTestId('input-counter')

    expect(inputCounterElement).toHaveValue(0)
  })

  it('should be able increment counter est', () => {
    const onVisibleMock = jest.fn()

    render(<CardAddTask onVisible={onVisibleMock}/>)

    const buttonIncrementElement = screen.getByTestId('button-increment')

    userEvent.click(buttonIncrementElement)
    userEvent.click(buttonIncrementElement)
    userEvent.click(buttonIncrementElement)

    const inputCounterElement =  screen.getByTestId('input-counter')

    expect(inputCounterElement).toHaveValue(3)
  })
})


