import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {GrMoreVertical} from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { toggleAStatusTaskAction } from '../../store/modules/task/actions';
import * as S from './styles'
import { Props } from './types';


export function CardTask({task, selected, onSelectedTask}: Props) {
  const dispatch = useDispatch()
  return (
    <S.Container
      data-testid="card-task"
      selectedCard={selected}
      onClick={() => onSelectedTask(task.title)}
    >
      <S.Header completeTask={task.finally}>
        <div className="title">
          <button
            onClick={() => dispatch(toggleAStatusTaskAction(task.title))}
          >
            <FaCheckCircle
              color={task.finally ? '#D95550' : '#dfdfdf'}
              size={25}
            />
          </button>
          <span>{task.title}</span>

        </div>
        <S.EstSetting>
          <div className="est">
            <span className="current">{`${task.est.current}`}</span>
            <span>{`/${task.est.final}`}</span>
          </div>
          <button>
            <GrMoreVertical color="#b1b1b1" size={25}/>
          </button>
        </S.EstSetting>
      </S.Header>
      {task.note && (
        <S.Content>
          <div className="note">
            <p>{task.note}</p>
          </div>
        </S.Content>
      )}
    </S.Container>
  )
}
