import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addNewTaskAction } from "../../store/modules/task/actions";
import { AddResource } from "../AddResource";
import * as S from "./styles";

type Props = {
  onVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function CardAddTask({onVisible}: Props) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [estCurrent, setEstCurrent] = useState(1);
  const [hasNote, setHasNote] = useState(false);

  const dispatch = useDispatch()

  const increment = () => setEstCurrent(state => state + 1);
  const decrement = () => {
    if (estCurrent) {
      setEstCurrent(state => state - 1)
    }
  };

  async function handleSubmitTask() {
   if (!title) {
     return;
   }

    try {
      dispatch(addNewTaskAction({
        title,
        est: {
          current: 0,
          final: estCurrent
        },
        note: hasNote ? note : '',
        finally: false
      }))
    } catch {
      console.log('Error')
    }
    finally {
      setTitle('');
      setEstCurrent(1);
      setNote('');
    }
  }


  return (
    <S.Container data-testid="card-add-task">
      <S.Main>
        <S.WrapperInputWhatWorkingOn>
          <input
            type="text"
            placeholder="What are your working on?"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </S.WrapperInputWhatWorkingOn>

        <S.WrapperEstPomodoro>
          <h3 className="title-est-pomodoro">Est Pomodoros</h3>
          <aside>
            <input
              type="number"
              className="counter-est-pomodoro"
              data-testid="input-counter"
              value={estCurrent}
              onChange={e => setEstCurrent(Number(e.target.value))}
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
        </S.WrapperEstPomodoro>

        <S.WrapperAddOptions directionColumn={hasNote}>
          {hasNote ? (
            <textarea
              data-testid="note-est-pomodoro"
              className="note-est-pomodoro"
              cols={45}
              rows={5}
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          ): (
            <AddResource
              label="+ Add note"
              onClick={() => setHasNote(true)}
            />
          )}
          <AddResource
            label="+ Add project"
            block={true}
          />
        </S.WrapperAddOptions>
      </S.Main>

      <S.Footer>
        <button
          className="button-default button-cancel"
          onClick={() => onVisible(false)}
        >
          Cancel
        </button>
        <button onClick={handleSubmitTask}className="button-default button-save">
          Save
        </button>
      </S.Footer>
    </S.Container>
  )
}
