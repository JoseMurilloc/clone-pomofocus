import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.7rem;
  margin-top: 0.8rem;

  input {
    border-radius: 0.7rem;

    background: blue;
    width: 31.4rem;
    height: 4.3rem;
    border: none;
    background-color: rgb(239, 239, 239);
    padding: 1.2rem 1.4rem;

    &::-webkit-input-placeholder {
      font-size: 1.7rem;
      color: #CDCDCD;
    }
  }
`;

