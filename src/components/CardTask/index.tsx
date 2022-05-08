import React from 'react';
import { Task } from '../../store/modules/task/types';
import { FaCheckCircle } from 'react-icons/fa';
import {GrMoreVertical} from 'react-icons/gr';
import * as S from './styles'

type Props = {
  task: Task
}

export function CardTask({task}: Props) {
  return (
    <S.Container>
      <S.Header>
        <div className="title">
          <FaCheckCircle color="#dfdfdf" size={25} />
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
