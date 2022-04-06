import React, { useState } from 'react';
import {IconMain} from '../../commons/icons/Main';

import stripeImage from '../../assets/stripe.png';
import twitterImage from '../../assets/twitter.png';
import facebookImage from '../../assets/facebook.png';

import MenuProfile from '../../components/MenuProfile';
import { ButtonOptional } from '../../components/ButtonOptional'
import {
  Main,
  Header,
  Time,
  LabelTimes,
  TaskOptions,
  Container,
  Content,
  Footer,
  ContentOfButtonsHeader,
  ContainerLinkSocial,
} from './styles';

import Profile from '../../components/Profile';
import { Countdown } from '../../components/Countdown';

import {Option} from './types'
import { Link } from 'react-router-dom';
import { Status } from '../../commons/types/status';
import { AddTask } from '../../components/AddTask';
import { CardAddTask } from '../../components/CardAddTask';

export function Home () {
  const [typePomodoro, setTypePomodoro] = useState<Status>('pomodoro')

  const [visibleModalProfile, setVisibleModalProfile] = useState(false)
  const [addTask, setAddTask] = useState(false)

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
        <h1>
          <IconMain.FaCheckCircle color="#fff" size="2rem" />
          Pomodoro
        </h1>

        <ContentOfButtonsHeader typePomodoro={typePomodoro}>
          <button className="button-default">
            <IconMain.GoGraph size="1.8rem" color="#fff" />
            <span>Report</span>
          </button>
          <button className="button-default">
            <IconMain.MdSettings size="1.8rem" color="#fff" />
            <span>Setting</span>
          </button>

          { false ? (
            <div className="login-user">
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14Ggsx2eT_A6emvGukBj5QrwRCqyJNSxD-5j5FvFLpw=s96-c"
                alt="profile"
              />
            </div>
          ) : (
            <Link to="/login">
              <button className="button-default">
                <IconMain.FaUserCircle size="1.8rem" color="#fff" />
                <span>Login</span>
              </button>
            </Link>
          ) }
        </ContentOfButtonsHeader>
      </Header>
      <Main>
        <Time typePomodoro={typePomodoro}>
          <div>
            {options.map(option => (
              <ButtonOptional
                key={option.label}
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
            <IconMain.GrMoreVertical color="#fff" size={16} />
          </button>
        </TaskOptions>
        {addTask ? (
          <CardAddTask onVisible={setAddTask}/>
        ) : (
          <AddTask
            Icon={IconMain.FaPlusCircle}
            label="Add Task"
            onClick={() => setAddTask(state => !state)}
          />
        )}
      </Main>
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
        <div className="header-footer">
          <a className="header-footer-link" href="/">Home</a>
          <a className="header-footer-link" href="/">Privacy</a>
          <a className="header-footer-link" href="/">Contact</a>
          <a className="header-footer-link" href="/">Simples page</a>
        </div>
        <ContainerLinkSocial>
          <a href="/" className="link-social">
            <img
              className="link-social-icon"
              src={facebookImage}
              alt="sprite-icon"
            />
          </a>
          <a href="/" className="link-social">
            <img
              className="link-social-icon"
              src={twitterImage}
              alt="sprite-icon"
            />
          </a>
          <a href="/" className="link-social">
            <img
              className="link-social-icon"
              src={stripeImage}
              alt="sprite-icon"
            />
          </a>
        </ContainerLinkSocial>
        <div className="made-header-message">
          <span>{`Made with <3 by`} <strong>Yuya Uzu</strong></span>
        </div>
        <div className="copyright">
          <small>©Pomofocus 2019. All Rights Reserved.</small>
        </div>
      </Footer>
    </Container>
  );
}
