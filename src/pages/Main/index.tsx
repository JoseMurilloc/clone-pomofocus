import React, { useState } from 'react';
import {IconMain} from '../../commons/icons/Main';

import MenuProfile from '../../components/MenuProfile';
import { ButtonOptional } from '../../components/ButtonOptional'

import { 
  SubContainer,
  Header,
  Time, 
  LabelTimes,
  TaskOptions,
  AddTask,
  Container,
  Content,
  Footer,
  ContentOfButtonsHeader,
} from './styles';

import Profile from '../../components/Profile';
import { Countdown } from '../../components/Countdown';


import {Option} from './types'
import { Link } from 'react-router-dom';
import { Status } from '../../commons/types/status';

export function Main() {
  const [typePomodoro, setTypePomodoro] = 
    useState<Status>('pomodoro')

  const [visibleModalProfile, setVisibleModalProfile] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [visibleMenuProfile, setVisibleMenuProfile] = useState(false);
  const [active, setActive] = useState(false);
 

  const options: Option[] = [
    {status: 'pomodoro', label: 'Pomodoro'},
    {status: 'short_break', label: 'Short break'},
    {status: 'long_break', label: 'Long Break'},
  ]


  const startCountdown = React.useCallback(() => {
    setActive(state => !state)
    setActiveButton(state => !state)
  }, [])

  return (
    <Container typePomodoro={typePomodoro}>
      { visibleModalProfile && (
        <Profile 
          visible={visibleModalProfile} 
          setVisible={setVisibleModalProfile}
        />) }
      { visibleMenuProfile && <MenuProfile /> }

      <Header typePomodoro={typePomodoro}>
        <div>
          <h1>
            <IconMain.FaCheckCircle size={20} color="#fff" />
            Pomodoro
          </h1>

          <ContentOfButtonsHeader typePomodoro={typePomodoro}>
            <button>
              <IconMain.GoGraph size={18} color="#fff" />
              Report
            </button>
            <button>
              <IconMain.MdSettings size={18} color="#fff" />
              Setting
            </button>

            { false ? (<button
              className="buttonNoneExistStyle"
              onClick={() => setVisibleMenuProfile(state => !state)}
            >
              <img 
                src="https://lh3.googleusercontent.com/a-/AOh14Ggsx2eT_A6emvGukBj5QrwRCqyJNSxD-5j5FvFLpw=s96-c" 
                alt="profile"
              />

            </button>) : (
              <Link to="/login">
                <button>
                  <IconMain.FaUserCircle size={18} color="#fff" />
                  Login
                </button>
              </Link>
            ) }
          </ContentOfButtonsHeader>

        </div>
      </Header>
      <SubContainer>
        <Time typePomodoro={typePomodoro}>
          <div>
            {options.map(option => (
              <ButtonOptional 
                activeButton={activeButton}
                status={option.status}
                label={option.label}
                typePomo={typePomodoro}
                setTypePomo={setTypePomodoro}
              />
            ))}
          </div>
          <Countdown 
            active={active}
            setActiveButton={setActiveButton}
            startCountdown={startCountdown}
            typePomo={typePomodoro}
            activeButton={activeButton}
          />
        </Time>
        <LabelTimes>
          <span>Time to work!</span>
        </LabelTimes>
        <TaskOptions>
          <span>Tasks</span>
          <button>
            <IconMain.GrMoreVertical color="#fff" size={25} />
          </button>
        </TaskOptions>
        <AddTask>
          <IconMain.FaPlusCircle size={20} color="#fff" />
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
          <ol>
            <li>
              <strong>Add tasks</strong> to work on today
            </li>
            <li>
              <strong>Set estimate pomodoros</strong> (1 = 25min of work) for each tasks
            </li>
            <li>
              <strong>Select a task</strong> to work on
            </li>
            <li>
              <strong>Start timer</strong> and focus on the task for 25 minutes
            </li>
            <li>
              <strong>Take a break</strong> for 5 minutes when the alarm ring
            </li>
            <li>
              <strong>Iterate</strong> 3-5 until you finish the tasks
            </li>
          </ol>
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
            <IconMain.FaFacebook size={45} color="#999999" />
          </a>
          <a href="/">
            <IconMain.AiFillTwitterCircle size={45} color="#999999" />
          </a>
          <a href="/">
            <IconMain.FaProductHunt size={45} color="#999999" />
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
