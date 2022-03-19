import styled, {css} from 'styled-components';
import {typeProps} from './types'


export const Container = styled.div<typeProps>`
  width: 100%;
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

export const Header = styled.div<typeProps>`
  width: 62rem;

  height: 6rem;
  margin: 0 auto;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1) !important;


  @media (max-width: 395px) {
    width: 100%;
    padding: 5px;
  }


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

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #eee;

  }

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

export const ContentOfButtonsHeader = styled.div<typeProps>`
  height: 3.2rem;


  .button-default {
    border: 0;
    border-radius: 0.5rem;
    height: 3.2rem;
    width: 8.7rem;
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

    /* Only user login image of profile */
    img {
      width: 2rem;
      border-radius: 0.4rem;

      border: 0.2rem solid var(--color-header-white-opacity);
    }

    &:nth-child(1)  {
      margin: 0rem 1rem;
    }

    @media (max-width: 395px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      padding: 8px;
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

`;

export const TaskOptions = styled.div`

  border-bottom: 0.2rem solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.4rem;

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

export const Footer = styled.div`
  border: 0.2rem solid #efefef;
  padding-top: 4rem;
  padding-bottom: 2rem;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-footer {
    margin-bottom: 1.4rem;

    .header-footer-link {
      color: hsl(357, 12%, 42%);
      font-size: 1.6rem;
      margin: 0rem 0.4rem;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
    }
  }

  .made-header-message {
    margin-bottom: 2rem;
    span {
      color: hsl(357, 12%, 42%);
      font-size: 1.6rem;

      strong {
        color: rgb(217 85 80);
        font-weight: bold;
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }

  .copyright {
    padding: 0;

    small {
      font-size: 1.2rem;
      color: hsl(357, 8%, 60%);
    }
  }
`;

export const ContainerLinkSocial = styled.div`
  display: flex;
  max-width: 62rem;
  margin-bottom: 1.7rem;

  .link-social {

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0.6rem 0.4rem;
    background-color: #999;
    width: 4.5rem;
    height: 4.5rem;

    border-radius: 50%;
  }

  .link-social-icon {
    width: 3rem;
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
