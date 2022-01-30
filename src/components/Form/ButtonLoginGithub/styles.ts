import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  text-align: center;
  
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;
  padding: 12px;
  background-color: white;
  border: 1px solid rgb(238, 238, 238);


  svg { 
    /* width: 20px; */
  }

  span {
    font-size: 14px;
    letter-spacing: 0.02em;
    color: rgb(119, 119, 119);
    font-weight: bold;
    margin-left: 10px;
  }
`;
