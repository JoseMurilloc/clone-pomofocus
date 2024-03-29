import React, { useState } from 'react';

import * as S from './styles';

import {
  Profile,
  Header,
  Footer,
  Countdown,
  CardAddTask,
  AddTask,
  ButtonOptional,
  CardTask
} from '../../components';

import { Status } from '../../commons/types/status';
import { options } from '../../utils/optionsPomodoro';
import {Icon} from '../../commons/icons/Main';


import {useSelector} from 'react-redux';
import { State } from '../../store/rootReducer';
import { ITaskState } from '../../store/modules/task/types';

export function Home () {

  const modal = useSelector((state: State) => state.modal);
  const task = useSelector((state: State) => state.task as ITaskState);

  const [typePomodoro, setTypePomodoro] = useState<Status>('pomodoro')
  const [addTask, setAddTask] = useState(false)

  const [activeButton, setActiveButton] = useState(false);
  const [active, setActive] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');


  const startCountdown = React.useCallback(() => {
    setActive(state => !state)
    setActiveButton(state => !state)
  }, [])

  return (
    <S.Container typePomodoro={typePomodoro}>
      { modal.isProfileModal && (<Profile />) }

      <Header typePomodoro={typePomodoro} />
      <S.Main>
        <S.Time typePomodoro={typePomodoro}>
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
        </S.Time>
        <S.LabelTimes>
          <span>#1</span>
          <span>Time to focus!</span>
        </S.LabelTimes>
        <S.TaskOptions>
          <span>Tasks</span>
          <button>
            <Icon.GrMoreVertical color="#fff" size={16} />
          </button>
        </S.TaskOptions>
        <S.ListTask>
          {task.tasks.map(t => (
            <CardTask
              task={t}
              selected={selectedTask === t.title}
              onSelectedTask={setSelectedTask}
            />
          ))}
        </S.ListTask>
        {addTask ? (
          <CardAddTask onVisible={setAddTask}/>
        ) : (
          <AddTask
            Icon={Icon.FaPlusCircle}
            label="Add Task"
            data-testid="add-task"
            onClick={() => setAddTask(state => !state)}
          />
        )}
      </S.Main>
      <S.Content>

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


      </S.Content>
      <Footer />
    </S.Container>
  );
}
