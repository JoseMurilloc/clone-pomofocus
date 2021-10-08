import React, { useState, useEffect } from 'react';
import { GrMoreVertical } from 'react-icons/gr';
import { MdSettings  } from 'react-icons/md'

import { GoGraph } from 'react-icons/go';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaPlusCircle } from 'react-icons/fa';
import { FaCheckCircle, FaFacebook, FaProductHunt } from 'react-icons/fa'

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
} from './styles';

import CountDownButton from '../../components/CountDownButton';
import Profile from '../../components/Profile';

function Main() {
  const [typePomo, setTypePomo] = useState<'pomodoro' | 'short_break' | 'long_break'>('pomodoro')
  const [time, setTime] = useState(25*60);

  const [visibleModalProfile, setVisibleModalProfile] = useState(false);
  const [active, setActive] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [visibleMenuProfile, setVisibleMenuProfile] = useState(false);

  const {minutes, seconds} = React.useMemo(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return { minutes, seconds}
  }, [time])

  const [minutesLeft, minutesRight] = React.useMemo(() => {
    return String(minutes).padStart(2, '0').split('');
  }, [minutes])

  const [secondLeft, secondRight] = React.useMemo(() => {
    return String(seconds).padStart(2, '0').split('');
  }, [seconds])

  const startCountdown = React.useCallback(() => {
    setActive(state => !state)
    setActiveButton(state => !state)
  }, [])

  useEffect(() => {
    switch (typePomo) {
      case 'pomodoro':
        setTime(25*60);
        return;
      case 'short_break':
        setTime(5*60);
        return;
      case 'long_break':
        setTime(15*60);
        return;
      default:
        setTime(25*60);
        return;
    }
  }, [typePomo])

  useEffect(() => {
    if (active && time > 0) { 
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])


  return (
    <Container typePomo={typePomo}>
      { visibleModalProfile && (
        <Profile 
          visible={visibleModalProfile} 
          setVisible={setVisibleModalProfile}
        />) }
      { visibleMenuProfile && <MenuProfile /> }

      <Header typePomo={typePomo}>
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

            <button
              className="buttonNoneExistStyle"
              onClick={() => setVisibleMenuProfile(state => !state)}
            >
              <img 
                src="https://lh3.googleusercontent.com/a-/AOh14Ggsx2eT_A6emvGukBj5QrwRCqyJNSxD-5j5FvFLpw=s96-c" 
                alt="profile"
              />

            </button>
          </div>

        </div>
      </Header>
      <SubContainer>
        <Time typePomo={typePomo}>
          <div>
            <ButtonOptional 
              activeButton={activeButton}
              status="pomodoro"
              label="Pomodoro"
              typePomo={typePomo}
              setTypePomo={setTypePomo}
            />
            <ButtonOptional
              activeButton={activeButton}
              status="short_break"
              label="Short break"
              typePomo={typePomo}
              setTypePomo={setTypePomo}
            />
            <ButtonOptional
              activeButton={activeButton}
              status="long_break"
              label="Long break"
              typePomo={typePomo}
              setTypePomo={setTypePomo}
            />
          </div>
          <div className="countDown">
            <div>
              <span>{minutesLeft}</span>
              <span>{minutesRight}</span>
            </div>
            <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </div>
          </div>
          <CountDownButton 
            typePomo={typePomo}
            activeButton={activeButton}
            onClick={startCountdown} 
          />
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
          <FaPlusCircle size={20} color="#fff" />
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