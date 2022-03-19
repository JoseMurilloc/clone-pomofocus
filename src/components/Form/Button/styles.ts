import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(59, 59, 59);
  border-radius: 0.3rem;
  min-width: 7rem;
  height:  4.4rem;
  border: none;
  box-shadow: rgb(0 0 0 / 20%) 0rem 0.2rem 0.2rem;

  &:hover {
    background-color: rgba(11,11,11);
  }

  span {
    color: rgb(255, 255, 255);
    font-size: 1.4rem;
  }
`;
