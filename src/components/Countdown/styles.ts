import styled, { css } from "styled-components";
import { Status } from "../../commons/types/status";

export const Container = styled.div`
`;

export const ContentTime = styled.div`
  padding-bottom: 1.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  span {
    font-size: 12rem;
    font-weight: bold;
    margin-top: 2rem;
  }
`;

type ButtonCountDownProps = {
  activeButton: boolean,
  typePomo: Status
}

export const ButtonCountDown = styled.button<ButtonCountDownProps>`
  background: #fff;

  ${props => props.typePomo === 'pomodoro'
    && css`color: var(--color-primary-orange);`}
  ${props => props.typePomo === 'short_break'
    && css`color: var(--color-primary-green);`}
  ${props => props.typePomo === 'long_break'
    && css`color: var(--color-primary-blue);`}

  border: 0;
  border-radius: 0.6rem;

  font-size: 2.2rem;
  font-weight: bold;

  margin: 2rem 0 0;
  padding: 0 1.2rem;

  height: 5.5rem;
  width: 20rem;

  &:active {
    box-shadow: 0 0rem #ebebeb;
    transform: translateY(0.4rem);
  }

  ${props => props.activeButton ? css`
    box-shadow: 0 0rem #ebebeb;
    transform: translateY(0.4rem);
  ` : css`
    box-shadow: 0 0.9rem #ebebeb;
  `}

`;
