import styled, {css} from 'styled-components';


type ContainerProps = {
  activeButton: boolean,
  typePomo: 'pomodoro' | 'shot_break' | 'long_break' 
}

export const Container = styled.button<ContainerProps>`
  background: #fff;

  ${props => props.typePomo === 'pomodoro' && css`color: var(--color-primary-orange);`}
  ${props => props.typePomo === 'shot_break' && css`color: var(--color-primary-green);`}
  ${props => props.typePomo === 'long_break' && css`color: var(--color-primary-blue);`}

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
