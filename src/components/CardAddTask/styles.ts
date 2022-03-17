import styled from "styled-components";

export const Container = styled.div`
  height: 280px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;

  margin-top: 12px;
`;

export const Main = styled.main`
  padding: 10px 20px 0px;
  height: 82%;
  border-radius: 8px 8px 0 0;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 70px;
  background-color: #efefef;
  padding: 14px 20px;
  display: flex;
  justify-content: flex-end;
  border-radius: 0 0 8px 8px;

  .button-default {
    width: 66px;
    height: 32px;
    border: none;
  }

  .button-save {
    border-radius: 4px;
    background-color: #373737;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;
    text-align: center;

    color: white;

    &:hover {
      background-color: #000;
    }
  }

  .button-cancel {
    color: rgb(136, 136, 136);
    font-weight: bold;
    margin-right: 14px;
    font-size: 14px;
  }
`;

export const WrapperInputWhatWorkingOn = styled.section`
  width: 100%;
  height: 45px;
  margin: 8px 0;
  margin-top: 20px;

  input {
    font-size: 22px;
    color: rgb(85, 85, 85);
    font-weight: bold;
    padding: 10px;
    width: 100%;
    border: none;
    background-color: transparent;

    &::placeholder {
      font-size: 22px;
      color: #dddddd;
      font-weight: 700;
      font-style: italic;
    }
  }
`;
export const WrapperEstPomodoro = styled.section``;
export const WrapperAddOptions = styled.section``;
