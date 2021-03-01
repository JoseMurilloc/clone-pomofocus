import styled, {css} from 'styled-components';

export const Container = styled.button`
  background: #fff;
  color: #ce5c58;

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
