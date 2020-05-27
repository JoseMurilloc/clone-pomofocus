import React from 'react';

import { GrMoreVertical } from 'react-icons/gr';
import { MdCheckCircle, MdSettings  } from 'react-icons/md'
import { GoGraph } from 'react-icons/go';
import { AiFillPlusCircle } from 'react-icons/ai';

import { 
  ContainerPomodoro,
  SubContainer,
  Header,
  Time, 
  ButtonOptional,
  ButtonStart,
  LabelTimes,
  TaskOptions,
  AddTask,
  Container
} from './styles';

function Main() {
  return (
    <Container>
    <ContainerPomodoro>
      <Header>
        <h1>
          <MdCheckCircle size={25} color="#fff" />
          Pomodoro
        </h1>

        <div>
          <button>
            <GoGraph size={20} color="#fff" />
            Report
          </button>
          <button>
            <MdSettings size={20} color="#fff" />
            Setting
          </button>

          <img 
            src="https://lh3.googleusercontent.com/a-/AOh14Ggsx2eT_A6emvGukBj5QrwRCqyJNSxD-5j5FvFLpw=s96-c" 
            alt="profile"
          />
        </div>
      </Header>
      
      <SubContainer>
        <Time>
          <div>
            <ButtonOptional>Pomodoro</ButtonOptional>
            <ButtonOptional>Short Break</ButtonOptional>
            <ButtonOptional>Long Break</ButtonOptional>
          </div>
          <div>
            <h2>25:00</h2>     
          </div>
          <ButtonStart>
            START
          </ButtonStart>

        </Time>
        <LabelTimes>
          <span>Time to work!</span>
        </LabelTimes>
        <TaskOptions>
          <span>Tasks</span>
          <button>
            <GrMoreVertical color="#fff" size={25} />
          </button>
        </TaskOptions>
        <AddTask>
          <AiFillPlusCircle size={20} color="#f5c2c0" />
          <span>Add Task</span>
        </AddTask>
      </SubContainer>
    </ContainerPomodoro>
    {/* <Feed>
      <h1>
        An online Pomodoro Timer to boost your productivity
      </h1>
    </Feed> */}
    </Container>
  );
}

export default Main;