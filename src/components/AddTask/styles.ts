import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 12px;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;

  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }
  span {
    font-weight: bold;
    margin-left: 10px;
    color: #fff;

  }
`;
