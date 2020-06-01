import React from 'react';

import { GrMoreVertical } from 'react-icons/gr';
import { MdCheckCircle, MdSettings  } from 'react-icons/md'
import { GoGraph } from 'react-icons/go';
import { AiFillPlusCircle } from 'react-icons/ai';

import { 
  SubContainer,
  Header,
  Time, 
  ButtonOptional,
  ButtonStart,
  LabelTimes,
  TaskOptions,
  AddTask,
  Container,
  Content,
  Title
} from './styles';

function Main() {
  return (
    <Container>
      <Header>
        <div>
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
      <Content>
        <Title>
          <h1>An online Pomodoro Timer to boost your productivity</h1>
        </Title>
        <div>
          <h2>What is Pomofocus?</h2>
          <p>Pomofocus is a customizable pomodoro timer that works on desktop e mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.</p>
        </div>
        <div>
          <h2>What is Pomodoro Technique?</h2>
          <p>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - Wikipedia</p>
        </div>
        <div>
          <h2>Features</h2>
          <ul>
            <li>Responsive design that works with desktop and mobile</li>
            <li>Color transition to switch moods between work time and rest time</li>
            <li>Audio notification at the end of a timer period</li>
            <li>Customizable timer intervals to suit your preference</li>
          </ul>
        </div>
      </Content>
    </Container>
  );
}

export default Main;