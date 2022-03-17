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
  width: 480px;
  margin: 0 auto;
  min-height: 600px;
  padding-bottom: 42px;
`;

export const Header = styled.div<typeProps>`
  width: 45%;
  height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
  min-width: 620px;

  ${props => props.typePomodoro === 'pomodoro' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 1px solid var(--color-header-border-orange);
  `}
  ${props => props.typePomodoro === 'short_break' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 1px solid var(--color-header-border-green);
  `}
  ${props => props.typePomodoro === 'long_break' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 1px solid var(--color-header-border-blue);
  `}

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #eee;

  }

  h1 {
    padding: 20px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
  }

  h1 svg {
    margin-right: 5px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const ContentOfButtonsHeader = styled.div<typeProps>`
  height: 32px;
  .button-default {
    border: 0;
    border-radius: 5px;
    height: 32px;
    width: 87px;
    padding: 8px 12px;
    font-size: 13px;

    display: flex;
    align-items: center;
    color: #eee;

    transition: background-color 0.5s ease-in-out 0s;
    background-color: var(--color-header-white-opacity);

    .buttonNoneExistStyle {
      background-color: transparent;
    }

    svg {
      margin-right: 5px;
    }

    /* Only user login image of profile */
    img {
      width: 20px;
      border-radius: 4px;

      border: 2px solid var(--color-header-white-opacity);
    }

    &:nth-child(1)  {
      margin: 0px 10px;
    }

  }

  .login-user{
    width: 28px;
    height: 28px;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    margin-left: 8px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border-color: rgba(255, 255, 255, 0.2);
    }
  }
`;


export const Time = styled.div<typeProps>`
  margin-top: 50px;
  border: none !important;

  ${props => props.typePomodoro === 'pomodoro' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 1px solid var(--color-secondary-orange);
    background-color: var(--color-secondary-orange);
  `}
  ${props => props.typePomodoro === 'short_break' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 1px solid var(--color-secondary-green);
    background-color: var(--color-secondary-green);
  `}
  ${props => props.typePomodoro === 'long_break' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 1px solid var(--color-secondary-blue);
    background-color: var(--color-secondary-blue);
  `}

  border-radius: 6px;
  padding: 25px 12px;
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
    font-size: 120px;
  }


`;

export const LabelTimes = styled.div`
  margin-top: 30px;

  text-align: center;
  font-size: 18px;
  margin-bottom: 25px;
  color: #eee;

`;

export const TaskOptions = styled.div`

  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;

  span {
    color: #eee;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    justify-content: center;
    align-items: center;
    max-width: 32px;
    max-height: 42px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 6px;
  }

  button svg {
    margin: 5px;
  }
`;

export const Footer = styled.div`
  border: 2px solid #efefef;
  padding-top: 40px;
  padding-bottom: 20px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-footer {
    margin-bottom: 14px;

    .header-footer-link {
      color: hsl(357, 12%, 42%);
      font-size: 16px;
      margin: 0px 4px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
    }
  }

  .made-header-message {
    margin-bottom: 20px;
    span {
      color: hsl(357, 12%, 42%);
      font-size: 16px;

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
      font-size: 12px;
      color: hsl(357, 8%, 60%);
    }
  }
`;

export const ContainerLinkSocial = styled.div`
  display: flex;
  max-width: 620px;
  margin-bottom: 17px;

  .link-social {

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 6px 4px;
    background-color: #999;
    width: 45px;
    height: 45px;

    border-radius: 50%;
  }

  .link-social-icon {
    width: 30px;
  }
`;

export const Content = styled.div`
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;

  h1 {
    padding-bottom: 20px;
    color: #541c1f;
    width: 620px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 620px;
    margin-bottom: 18px;

    h2 {
      color: #5e2b2f;
      margin-top: 25px;
    }

    h2::after {
      content: '';
      display: block;
      width: 24px;
      padding-top: 8px;
      border-bottom: 4px solid var(--color-primary-orange);
      opacity: 0.6;
    }

    ol {
      margin: 16px 0;
      font-size: 16px;
      padding-left: 25px;

      li {
        margin: 12px 0;
        color: #785e60;
        line-height: 1.6em;
      }
    }

    ul {
      margin: 16px 0;
      font-size: 18px;
      padding-left: 25px;

      li {
        margin: 12px 0;
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
      margin-top: 18px;
      font-size: 18px;

      a {
        font-weight: bold;
        text-decoration: none;
        color: #e96d73;
      }
    }
  }
`;
