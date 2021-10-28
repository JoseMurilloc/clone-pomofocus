import styled, { css } from "styled-components";

export const Container = styled.div`
`;

export const ContentTime = styled.div`
  padding-bottom: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 120px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

type ButtonCountDownProps = {
  activeButton: boolean,
  typePomo: 'pomodoro' | 'short_break' | 'long_break' 
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
  border-radius: 6px;

  font-size: 22px;
  font-weight: bold;

  margin: 20px 0 0;
  padding: 0 12px;

  height: 55px;
  width: 200px;

  &:active {
    box-shadow: 0 0px #ebebeb;
    transform: translateY(4px);
  }

  ${props => props.activeButton ? css`
    box-shadow: 0 0px #ebebeb;
    transform: translateY(4px);
  ` : css`
    box-shadow: 0 9px #ebebeb;
  `}

`;