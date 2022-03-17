import React from "react";
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
          <h3>Est Pomodoros</h3>
          <aside>
            <input type="number" />
            <button>UP</button>
            <button>Down</button>
          </aside>
        </WrapperEstPomodoro>

        <WrapperAddOptions>
          <button>Add note</button>
          <button>Add project</button>
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
