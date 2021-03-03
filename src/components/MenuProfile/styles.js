import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 200px;
  background-color: #fff;
  padding: 4px 0px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;

  position: absolute;
  right: 360px;
  top: 60px;

  ${props => props.visibleMenuProfile ? css`
    opacity: 1;
  ` : css`
    opacity: 0;
  `}

  ul {
    text-decoration: none;
    list-style: none;
    li {
      font-size: 14px;
      padding: 10px 16px;
      color: rgb(79, 43, 45);
      font-weight: 500;
      transition: background-color 0.5s ease-in-out 0s;
      cursor: pointer;
      &:hover {
        background-color: rgba(9,9,9,0.1);
      }
      
      svg {
        margin-right: 8px;
      }
    }
  }  
`;
