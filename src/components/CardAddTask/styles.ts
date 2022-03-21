import styled from "styled-components";

export const Container = styled.div`
  /* height: 28rem; */
  width: 100%;
  background-color: #fff;
  border-radius: 0.8rem;

  margin-top: 1.2rem;
`;

export const Main = styled.main`
  padding: 1rem 2rem 1.8rem;
  height: 82%;
  border-radius: 0.8rem 0.8rem 0 0;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 7rem;
  background-color: #efefef;
  padding: 1.4rem 2rem;
  display: flex;
  justify-content: flex-end;
  border-radius: 0 0 0.8rem 0.8rem;

  .button-default {
    width: 6.6rem;
    height: 3.2rem;
    border: none;
  }

  .button-save {
    border-radius: 0.4rem;
    background-color: #373737;
    box-shadow: rgb(0 0 0 / 20%) 0rem 0.2rem 0.2rem;
    text-align: center;

    color: white;

    &:hover {
      background-color: #000;
    }
  }

  .button-cancel {
    color: rgb(136, 136, 136);
    font-weight: bold;
    margin-right: 1.4rem;
    font-size: 1.4rem;
  }
`;

export const WrapperInputWhatWorkingOn = styled.section`
  width: 100%;
  height: 4.5rem;
  margin: 0.8rem 0;
  margin-top: 2rem;

  input {
    font-size: 2.2rem;
    color: rgb(85, 85, 85);
    font-weight: bold;
    padding: 1rem;
    width: 100%;
    border: none;
    background-color: transparent;

    &::placeholder {
      font-size: 2.2rem;
      color: #dddddd;
      font-weight: 700;
      font-style: italic;
    }
  }
`;
export const WrapperEstPomodoro = styled.section`
  margin: 8px;

  .title-est-pomodoro {
    color: rgb(85, 85, 85);
    font-weight: bold;
    font-size: 16px;

    margin-bottom: 8px;
  }

  aside {
    display: flex;
    align-items: center;
  }

  .counter-est-pomodoro {
    width: 6.5rem;
    height: 3.8rem;
    border-radius: 0.4rem;
    border: none;
    background-color: #efefef;
    padding: 1rem 0.5rem 1rem 1rem;

    font-size: 1.6rem;
    color: rgb(85, 85, 85);
    font-weight: bold;

    margin-right: 1rem;
  }

  .button-counter-pomodoro {
    border: 1px solid rgb(223, 223, 223);
    background-color: #FFF;
    width: 40px;
    opacity: 0.8;
    border-radius: 4px;
    height: 3.6rem;
    margin: 2px;

    margin-right: 1rem;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;
  }

`;

type WrapperAddOptionsProps = {
  directionColumn: boolean;
}

export const WrapperAddOptions = styled.section<WrapperAddOptionsProps>`
  width: 100%;
  display: flex;
  margin-top: 16px;
  justify-content: flex-start;
  align-items: flex-start;

  flex-direction: ${({directionColumn}) => directionColumn
    ? 'column' : 'row'
  };

  .note-est-pomodoro {
    border: none;
    background-color: #efefef;
    border-radius: 6px;
    margin-bottom: 14px;
    padding: 14px 10px;
    font-size: 15px;
    color: rgb(85, 85, 85);
  }
`;
