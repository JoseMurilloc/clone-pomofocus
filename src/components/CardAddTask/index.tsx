import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addNewTaskAction } from "../../store/modules/task/actions";
import { AddResource } from "../AddResource";
import {
  Container,
  Footer,
  Main,
  WrapperInputWhatWorkingOn,
  WrapperEstPomodoro,
  WrapperAddOptions
} from "./styles";

type Props = {
  onVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function CardAddTask({onVisible}: Props) {
  const [note, setNote] = useState(false);
  const [countEst, setCountEst] = useState(0);

  const dispatch = useDispatch()



  const increment = () => setCountEst(state => state + 1);
  const decrement = () => {
    if (countEst) {
      setCountEst(state => state - 1)
    }
  };


  return (
    <Container data-testid="card-add-task">
      <Main>
        <WrapperInputWhatWorkingOn>
          <input
            type="text"
            placeholder="What are your working on?"
          />
        </WrapperInputWhatWorkingOn>

        <WrapperEstPomodoro>
          <h3 className="title-est-pomodoro">Est Pomodoros</h3>
          <aside>
            <input
              type="number"
              className="counter-est-pomodoro"
              value={countEst}
              data-testid="input-counter"
            />
            <button
              className="button-counter-pomodoro"
              onClick={increment}
              data-testid="button-increment"
            >
              <MdArrowDropUp size={24} color="#7d7d7d" />
            </button>
            <button
              className="button-counter-pomodoro"
              onClick={decrement}
              data-testid="button-decrement"
            >
              <MdArrowDropDown size={24} color="#7d7d7d" />
            </button>
          </aside>
        </WrapperEstPomodoro>

        <WrapperAddOptions directionColumn={note}>
          {note ? (
            <textarea
              data-testid="note-est-pomodoro"
              className="note-est-pomodoro"
              cols={45}
              rows={5}
            />
          ): (
            <AddResource
              label="+ Add note"
              onClick={() => setNote(true)}
            />
          )}
          <AddResource
            label="+ Add project"
            block={true}
          />
        </WrapperAddOptions>
      </Main>

      <Footer>
        <button
          className="button-default button-cancel"
          onClick={() => onVisible(false)}
        >
          Cancel
        </button>
        <button onClick={() => dispatch(addNewTaskAction({
          title: 'Titulo exemplo',
          est: {
            current: 0,
            final: 2
          },
          note: 'Note exemplo'
        }))}className="button-default button-save">
          Save
        </button>
      </Footer>
    </Container>
  )
}
