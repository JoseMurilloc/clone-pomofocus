import styled, { css } from "styled-components";
import { ContainerProps, HeaderProps } from "./types";

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  padding: 10px 15px 15px 15px;
  border-left: 6px solid ${({selectedCard}) => selectedCard ? '#111' : 'transparent'};
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px;
  cursor: pointer;


  &:hover {
    border-left: 6px solid ${({selectedCard}) => selectedCard ? '#111' : '#dfdfdf'};
  }
`;

export const Header = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      cursor: pointer;
      background: transparent;
      border: none;
    }

    span {
      color: #555555;
      font-weight: bold;
      font-size: 1.6rem;
      margin-left: 1.6rem;

      ${props => props.completeTask && css`
        text-decoration: line-through;
        color: rgb(187, 187, 187);
      `}

    }
  }
`;

export const EstSetting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 !important;


  .est {
    width: 4rem;
    span {
      display: inline-block;
      color: rgb(187, 187, 187);
      font-weight: bold;
      text-align: right;
      font-size: 1.4rem;
    }

    .current {
      font-size: 1.8rem;
    }
  }

  button {
    border: 1px solid rgb(223, 223, 223);
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

export const Content = styled.div`
  width: 100%;

  .note {
    font-size: 15px;
    border-radius: 8px;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: pre-wrap;
    background-color: rgb(252, 248, 222);
    color: rgb(96, 85, 21);
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 0px;
    padding: 10px 12px;
    margin-left: 15px;
    margin-top: 15px;
  }
`;
