import React from 'react';

import { GrMoreVertical } from 'react-icons/gr';
import { MdSettings  } from 'react-icons/md'
import { GoGraph } from 'react-icons/go';
import { AiFillPlusCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { FaCheckCircle, FaFacebook, FaProductHunt } from 'react-icons/fa'

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
  Footer
} from './styles';

function Main() {
  return (
    <Container>
      <Header>
        <div>
          <h1>
            <FaCheckCircle size={20} color="#fff" />
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
      
        <h1>An online Pomodoro Timer to boost your productivity</h1>

        <div>
          <h2>
            What is Pomofocus?
          </h2>
          <p>Pomofocus is a customizable pomodoro timer that works on desktop e mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by <a href="/">Pomodoro Technique</a> which is a time management method developed by Francesco Cirillo.</p>
        </div>
        <div>
          <h2>
            What is Pomodoro Technique?
          </h2>
          <p>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href="/">Wikipedia</a></p>
        </div>
        <div>
          <h2>
            How to use the Pomodoro Timer?
          </h2>
          <ul>
            <li>
              1. <strong>Add tasks</strong> to work on today
            </li>
            <li>
              2. <strong>Set estimate pomodoros</strong> (1 = 25min of work) for each tasks
            </li>
            <li>
              3. <strong>Select a task</strong> to work on
            </li>
            <li>
              4. <strong>Start timer</strong> and focus on the task for 25 minutes
            </li>
            <li>
              5. <strong>Take a break</strong> for 5 minutes when the alarm ring
            </li>
            <li>
              6. <strong>Iterate</strong> 3-5 until you finish the tasks
            </li>
          </ul>
        </div>
        <div>
          <h2>Features</h2>
          <ul>
            <li><strong>Responsive design</strong> that works with desktop and mobile</li>
            <li><strong>Color transition</strong> to switch moods between work time and rest time</li>
            <li> <strong>Audio notification</strong> at the end of a timer period</li>
            <li> <strong>Customizable timer</strong> intervals to suit your preference</li>
          </ul>
        </div> 

        
      </Content>
        <Footer>
          <div>
            <span>HOME</span>
            <span>PRIVACY</span>
          </div>
          <div>
            <a href="/">
              <FaFacebook size={45} color="#999999" />
            </a>
            <a href="/">
              <AiFillTwitterCircle size={45} color="#999999" />
            </a>
            <a href="/">
              <FaProductHunt size={45} color="#999999" />
            </a>
          </div>
          <div>
            Made with s2 by <strong>Yuya Uzu</strong>
          </div>
          <div>
            <small>©Pomofocus 2019. All Rights Reserved.</small>
          </div>
        </Footer>
    </Container>
  );
}

export default Main;