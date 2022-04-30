import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../commons/icons/Main';
import { Status } from '../../commons/types/status';
import {useDispatch} from 'react-redux';

import * as S from './styles'
import { toggleMenuProfileModalAction } from '../../store/modules/modal/actions';

type Props = {
  typePomodoro: Status
}

export function Header ({typePomodoro}: Props) {
  const dispatch = useDispatch();

  return (
    <S.Header typePomodoro={typePomodoro}>
      <h1>
        <Icon.FaCheckCircle color="#fff" size="2rem" />
        Pomodoro
      </h1>

      <S.ContentOfButtonsHeader typePomodoro={typePomodoro}>
        <button className="button-default">
          <Icon.GoGraph size="1.8rem" color="#fff" />
          <span>Report</span>
        </button>
        <button className="button-default">
          <Icon.MdSettings size="1.8rem" color="#fff" />
          <span>Setting</span>
        </button>

        { true ? (
          <button
            onClick={() => dispatch(toggleMenuProfileModalAction())}
            className="login-user"
          >
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14Ggsx2eT_A6emvGukBj5QrwRCqyJNSxD-5j5FvFLpw=s96-c"
              alt="profile"
            />
          </button>
        ) : (
          <Link to="/login">
            <button className="button-default">
              <Icon.FaUserCircle size="1.8rem" color="#fff" />
              <span>Login</span>
            </button>
          </Link>
        ) }
      </S.ContentOfButtonsHeader>
    </S.Header>
  )
}
