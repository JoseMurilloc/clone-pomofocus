import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  border-radius: 0.4rem;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0rem 0.2rem 0.2rem;
  padding: 1.2rem;
  background-color: white;
  border: 0.1rem solid rgb(238, 238, 238);


  svg {
    /* width: 2rem; */
  }

  span {
    font-size: 1.4rem;
    letter-spacing: 0.02em;
    color: rgb(119, 119, 119);
    font-weight: bold;
    margin-left: 1rem;
  }
`;
