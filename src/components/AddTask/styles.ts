import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 1.2rem;
  border: 0.2rem dashed rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  cursor: pointer;

  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  span {
    font-size: 1.6rem;
    font-weight: bold;
    margin-left: 1rem;
    color: #fff;

  }
`;
