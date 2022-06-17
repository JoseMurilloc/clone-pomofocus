import styled, {css} from 'styled-components';
import {typeProps} from './types'


export const Container = styled.div<typeProps>`
  ${props => props.typePomodoro === 'pomodoro' && css`
    transition: background-color 0.5s ease-in-out 0s;
    background: var(--color-primary-orange);
  `}
  ${props => props.typePomodoro === 'short_break' && css`
    transition: background-color 0.5s ease-in-out 0s;
    background: var(--color-primary-green);
  `}
  ${props => props.typePomodoro === 'long_break' && css`
    transition: background-color 0.5s ease-in-out 0s;
    background: var(--color-primary-blue);
  `}
`;

export const Main = styled.div`
  width: 48rem;
  margin: 0 auto;
  padding-bottom: 4.2rem;
`;


export const Time = styled.div<typeProps>`
  margin-top: 5rem;
  border: none !important;

  ${props => props.typePomodoro === 'pomodoro' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 0.1rem solid var(--color-secondary-orange);
    background-color: var(--color-secondary-orange);
  `}
  ${props => props.typePomodoro === 'short_break' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 0.1rem solid var(--color-secondary-green);
    background-color: var(--color-secondary-green);
  `}
  ${props => props.typePomodoro === 'long_break' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 0.1rem solid var(--color-secondary-blue);
    background-color: var(--color-secondary-blue);
  `}

  border-radius: 0.6rem;
  padding: 2.5rem 1.2rem;
  color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div h2 {
    font-size: 12rem;
  }


`;

export const LabelTimes = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: #eee;

  span {
    display: block;
  }

  span:first-child {
    opacity: 0.6;
    font-size: 1.6rem;
  }

`;

export const TaskOptions = styled.div`

  border-bottom: 0.2rem solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.4rem;
  margin-bottom: 18px;

  span {
    color: #eee;
    font-size: 1.8rem;
    font-weight: bold;
  }

  button {
    justify-content: center;
    align-items: center;
    max-width: 3.2rem;
    max-height: 4.2rem;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 0.6rem;
  }

  button svg {
    margin: 0.5rem;
  }
`;

export const ListTask = styled.div`
  div + div {
    margin-top: 15px;
  }
`;

export const Content = styled.div`
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5rem;

  h1 {
    padding-bottom: 2rem;
    color: #541c1f;
    width: 62rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 62rem;
    margin-bottom: 1.8rem;

    h2 {
      color: #5e2b2f;
      margin-top: 2.5rem;
    }

    h2::after {
      content: '';
      display: block;
      width: 2.4rem;
      padding-top: 0.8rem;
      border-bottom: 0.4rem solid var(--color-primary-orange);
      opacity: 0.6;
    }

    ol {
      margin: 1.6rem 0;
      font-size: 1.6rem;
      padding-left: 2.5rem;

      li {
        margin: 1.2rem 0;
        color: #785e60;
        line-height: 1.6em;
      }
    }

    ul {
      margin: 1.6rem 0;
      font-size: 1.8rem;
      padding-left: 2.5rem;

      li {
        margin: 1.2rem 0;
        color: #785e60;
        line-height: 1.6em;
        display: list-item;
      }

      li::before {
        content: '';
        color: red;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }

    p {
      color: #7c6365;
      line-height: 1.6em;
      margin-top: 1.8rem;
      font-size: 1.8rem;

      a {
        font-weight: bold;
        text-decoration: none;
        color: #e96d73;
      }
    }
  }
`;
