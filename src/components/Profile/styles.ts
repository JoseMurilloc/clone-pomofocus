import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
`

export const Modal = styled.div`
  width: 500px;
  background-color: #FFF;
  border-radius: 8px;
  z-index: 2147483647;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button.close {
    background: transparent;
    border: none;
  }

  header {
    padding: 20px 20px 0; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    h1 {
      color: rgb(187, 187, 187);
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;    
    }

    svg {
      cursor: pointer;
    }
  }

  main {  
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 14px;
    
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px dotted rgb(170, 170, 170);
    }

    span {
      margin-left: 28px;
      padding: 10px 0px;
      color: rgb(85, 85, 85);
      font-weight: bold;
      font-size: 26px;
    }
  }


  footer {
    background-color: rgb(239, 239, 239);
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 0 0 8px 8px;

    padding: 14px 20px;

    button {
      min-width: 70px;
      min-height: 32px;
    }

    .buttonCancel {
      background-color: transparent;
      color: rgb(136, 136, 136);
      font-size: 14px;
      border: none;
      font-weight: bold;
      margin-right: 14px;
    } 
    .buttonSave {
      background-color: rgb(34, 34, 34);
      font-size: 14px;
      border: 2px solid rgb(34, 34, 34);
      color: white;
      opacity: 0.9;
      border: none;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px, rgb(0 0 0 / 10%) 0px 3px 6px;
    } 
  }
`;
