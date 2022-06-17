import styled, {css} from 'styled-components';
import { Status } from '../../commons/types/status';

export type HeaderProps = {
  typePomodoro: Status;
}

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #eee;
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

export const Header = styled.div<HeaderProps>`
  position: relative;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1) !important;
  width: 62rem;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


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
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    margin-left: 0.8rem;
    border: none;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    img.image-profile {
      box-sizing: initial;
      height: 100%;
      width: calc(3rem - 3);
      border-radius: 9px;
      border: 3px solid rgba(255, 255, 255, 0.2);
    }
  }


  button span{
    @media (max-width: 450px) {
      display: none;
    }
  }
`;
