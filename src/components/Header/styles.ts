import styled, {css} from 'styled-components';
import { Status } from '../../commons/types/status';

export type HeaderProps = {
  typePomodoro: Status;
}

export const Header = styled.header<HeaderProps>`
  width: 62rem;

  height: 6rem;
  margin: 0 auto;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1) !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #eee;


  ${props => props.typePomodoro === 'pomodoro' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 0.1rem solid var(--color-header-border-orange);
  `}
  ${props => props.typePomodoro === 'short_break' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 0.1rem solid var(--color-header-border-green);
  `}
  ${props => props.typePomodoro === 'long_break' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 0.1rem solid var(--color-header-border-blue);
  `}



  h1 {
    padding: 2rem;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
  }

  h1 svg {
    margin-right: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const ContentOfButtonsHeader = styled.div<HeaderProps>`
  height: 3.2rem;

  .button-default {
    border: 0;
    border-radius: 0.5rem;
    height: 3.2rem;
    max-width: 8.7rem;
    padding: 0.8rem 1.2rem;
    font-size: 1.3rem;

    display: flex;
    align-items: center;
    color: #eee;

    transition: background-color 0.5s ease-in-out 0s;
    background-color: var(--color-header-white-opacity);

    .buttonNoneExistStyle {
      background-color: transparent;
    }

    svg {
      margin-right: 0.5rem;
    }

    &:nth-child(1)  {
      margin: 0rem 1rem;
    }
  }

  .login-user{
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 0.4rem;
    border: 0.2rem solid rgba(255, 255, 255, 0.2);
    margin-left: 0.8rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.4rem;
      border-color: rgba(255, 255, 255, 0.2);
    }
  }

  button span{
    @media (max-width: 450px) {
      display: none;
    }
  }
`;
