import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  background-color: #fff;
  padding: 0.4rem 0rem;
  border-radius: 0.4rem;
  box-shadow: rgb(0 0 0 / 15%) 0rem 1rem 2rem, rgb(0 0 0 / 10%) 0rem 0.3rem 0.6rem;

  position: absolute;
  right: 36rem;
  top: 6rem;

  ul {
    text-decoration: none;
    list-style: none;
    li {
      display: flex;
      align-items: center;

      button {
        background: transparent;
        border: none;
      }

      font-size: 1.4rem;
      padding: 1rem 1.6rem;
      color: rgb(79, 43, 45);
      font-weight: 500;
      transition: background-color 0.5s ease-in-out 0s;
      cursor: pointer;

      &:hover {
        background-color: rgba(9,9,9,0.1);
      }

      svg {
        margin-right: 0.8rem;
      }
    }
  }
`;
