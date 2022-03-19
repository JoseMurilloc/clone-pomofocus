import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-primary-orange);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  overflow-x: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`

  width: 35rem;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    font-size: 4rem;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }
  }

  h2 {
    color: #FFF;
    opacity: 0.8;
    margin: 2.5rem 0rem 3.8rem 0rem;
    font-size: 1.8rem;
  }
`;

export const Form = styled.div`
  width: 35rem;
  background-color: #FFF;
  padding: 0.8rem 1.8rem 3.2rem 1.8rem;
  border-radius: 0.8rem;

  div.containerButtonWithEmail {
    width: 100%;
    margin-top: 2.8rem;
  }

  div.containerOr {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1.8rem 0 0 0;

    &::before {
      content: '';
      display: inline-block;
      width: 45%;
      height: 0.1rem;
      background: #EAEAEA;
    }

    &::after {
      content: '';
      display: inline-block;
      width: 45%;
      height: 0.1rem;
      background: #EAEAEA;
    }

    span {
      text-transform: lowercase;
      font-size: 1.6rem;
      color: rgb(196, 196, 196);
      margin: 0 2rem;
    }
  }

  div.containerLabelInput {
    width: 100%;
    margin: 2rem 0 0.8rem 0;


    span {
      text-transform: uppercase;
      font-size: 1.1rem;
      font-weight: 700;
      color: rgb(196, 196, 196);
    }
  }
  div.containerInput {
    width: 100%;
  }

  div.containerForgotPassword {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.4rem;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.4);
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2.4rem;

  span {
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }

  a {
    margin-bottom: 0.8rem;
    font-weight: bold;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    text-decoration: underline;
  }
`;
