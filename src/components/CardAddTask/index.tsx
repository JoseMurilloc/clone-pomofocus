import React from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
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
              value={1}
            />
            <button className="button-counter-pomodoro">
              <MdArrowDropUp size={24} color="#7d7d7d" />
            </button>
            <button className="button-counter-pomodoro">
              <MdArrowDropDown size={24} color="#7d7d7d" />
            </button>
          </aside>
        </WrapperEstPomodoro>

        <WrapperAddOptions>
          <AddResource label="+ Add note" />
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
        <button className="button-default button-save">
          Save
        </button>
      </Footer>
    </Container>
  )
}
