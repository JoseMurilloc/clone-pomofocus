import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  margin-top: 8px;
  
  input { 
    border-radius: 7px;

    background: blue;
    width: 314px;
    height: 43px;
    border: none;
    background-color: rgb(239, 239, 239);
    padding: 12px 14px;

    &::-webkit-input-placeholder {
      font-size: 17px;
      color: #CDCDCD;
    }
  }
`;

