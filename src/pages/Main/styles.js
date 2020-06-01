import styled from 'styled-components';


export const Title = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 20px;

  width: 100%;
  height: 98px;
  color: #541c1f;
  h1 {
    width: 620px;
  }
`;

export const Content = styled.div`
  background: #fff;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const Container = styled.div`
  width: 100%;
  background: #f05b56;
`;

export const SubContainer = styled.div`
  /* height: 312px; */
  width: 480px;
  margin: 0 auto;
  min-height: 600px;
`;

export const Header = styled.div`

  /* background: blue; */
  width: 50%; 
  margin: 0 auto;

  div {
    border-bottom: 1px solid #d8524d;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #eee;
  }

  h1 {
    padding: 20px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h1 svg {
    margin-right: 5px;
  }

  div {
    display: flex;
    align-items: center;
  }
  div button {
    padding: 5px;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
  
    display: flex;
    align-items: center;
    color: #eee;

    margin-right: 10px;
    background: #f27874;

  }

  div img {
    width: 28px;
    border: 2px solid #f27874;
    border-radius: 4px;
  }


`;


export const Time = styled.div`
  margin-top: 50px;
  border: 1px solid #f26c67;
  background: #f26c67;
  border-radius: 6px;
  padding: 50px 25px;
  color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div h2 {
    font-size: 120px;
  }

`;

export const ButtonStart = styled.button`
  background: #fff;
  color: #ce5c58;

  border: 0;
  border-radius: 6px;

  font-size: 22px;
  font-weight: bold;

  margin: 20px 0 0;
  padding: 0 12px;
  box-shadow: 0 9px #ebebeb;

  height: 55px;
  width: 200px;

  &:active {
    box-shadow: 0 5px #ebebeb;
    transform: translateY(4px);
  }

`;


export const ButtonOptional = styled.button`
  background: transparent;
  color: #eee;
  font-weight: bold;
  border: 0;
  font-size: 16px;
  padding: 5px 12px;
  border-radius: 6px;
  background: #ce5c58;
  
  & + button {
    margin-left: 20px;
  }
`;

export const LabelTimes = styled.div`
  margin-top: 30px;

  text-align: center;
  font-size: 18px;
  margin-bottom: 25px;
  color: #eee;

`;

export const TaskOptions = styled.div`

  border-bottom: 2px solid #f9bdbb;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 25px;
  
  span {
    color: #eee;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    background: #f27874;
    border: none;
    /* padding: 8px; */
    border-radius: 6px;
  }

  button svg {
    margin: 5px;
  }
`;

export const AddTask = styled.div`
  margin-top: 12px;
  border: 2px dashed #e98b88;
  background: #dd534f;
  border-radius: 6px;
  cursor: pointer;

  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: bold;
    margin-left: 10px;
    color: #f5c2c0;
  }
`;

// export const Feed = styled.div`
  
//   background: #fff;
//   h1 {
//     font-size: 34px;
//     color: #541c1f;
//   }
// `;