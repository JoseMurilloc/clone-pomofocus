import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary-orange);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 0 0;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`

  width: 350px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;


  h1 { 
    font-size: 40px;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }

  h2 {
    color: #FFF;
    opacity: 0.8;
    margin: 25px 0px 38px 0px;
    font-size: 18px;
  }
`;

export const Form = styled.div`
  width: 350px;
  background-color: #FFF;
  padding: 8px 18px 32px 18px;
  border-radius: 8px;

  div.containerButtonWithEmail {
    width: 100%;
    margin-top: 28px;
  }

  div.containerOr {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 18px 0 0 0;

    &::before {
      content: '';
      display: inline-block;
      width: 45%;
      height: 1px;
      background: #EAEAEA;
    }

    &::after {
      content: '';
      display: inline-block;
      width: 45%;
      height: 1px;
      background: #EAEAEA;
    }

    span {
      text-transform: lowercase;
      font-size: 16px;
      color: rgb(196, 196, 196);
      margin: 0 20px;
    }
  }

  div.containerLabelInput {
    width: 100%;
    margin: 20px 0 8px 0;


    span {
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 700;
      color: rgb(196, 196, 196);
    }
  }
  div.containerInput {
    width: 100%;
  }

  div.containerForgotPassword {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 14px;
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

  span {
    margin-bottom: 8px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }

  a {
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    text-decoration: underline;
  }
`;