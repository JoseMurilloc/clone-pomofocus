import styled, {css} from 'styled-components';

type typeProps = {
  typePomo: 'pomodoro' | 'short_break' | 'long_break'
} 

export const Container = styled.div<typeProps>`
  width: 100%;
  ${props => props.typePomo === 'pomodoro' && css`
    transition: background-color 0.5s ease-in-out 0s;
    background: var(--color-primary-orange);
  `}
  ${props => props.typePomo === 'short_break' && css`
    transition: background-color 0.5s ease-in-out 0s;
    background: var(--color-primary-green);
  `}
  ${props => props.typePomo === 'long_break' && css`
    transition: background-color 0.5s ease-in-out 0s;
    background: var(--color-primary-blue);
  `}
`;

export const SubContainer = styled.div`
  width: 480px;
  margin: 0 auto;
  min-height: 600px;
`;

export const Header = styled.div<typeProps>`
  width: 45%;
  height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;

  ${props => props.typePomo === 'pomodoro' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 1px solid var(--color-header-border-orange);
  `}
  ${props => props.typePomo === 'short_break' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 1px solid var(--color-header-border-green);
  `}
  ${props => props.typePomo === 'long_break' && css`
    transition: border-bottom 0.5s ease-in-out 0s;
    border-bottom: 1px solid var(--color-header-border-blue);
  `}

  div {
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
    justify-content: baseline;
  }

  h1 svg {
    margin-right: 5px;
  }

  div {
    display: flex;
    align-items: center;
  }

  div button + button {
    margin-left: 10px;
  }
  
  div button {
    border: 0;
    border-radius: 5px;
    padding: 5px 15px;
  
    display: flex;
    align-items: center;
    color: #eee;

    ${props => props.typePomo === 'pomodoro' && css`
      transition: background-color 0.5s ease-in-out 0s;
      background-color: var(--color-secondary-orange);
    `}
    ${props => props.typePomo === 'short_break' && css`
      transition: background-color 0.5s ease-in-out 0s;
      background-color: var(--color-secondary-green);
    `}
    ${props => props.typePomo === 'long_break' && css`
     transition: background-color 0.5s ease-in-out 0s;
      background-color: var(--color-secondary-blue);
    `}

  }

  .buttonNoneExistStyle {
    background-color: transparent;
  }

  div button > img {
    width: 30px;
    border-radius: 4px;

    ${props => props.typePomo === 'pomodoro' && css`
      transition: border 0.5s ease-in-out 0s;
      border: 2px solid var(--color-secondary-orange);    
    `}
    ${props => props.typePomo === 'short_break' && css`
      transition: border 0.5s ease-in-out 0s;
      border: 2px solid var(--color-secondary-green);    
    `}
    ${props => props.typePomo === 'long_break' && css`
      transition: border 0.5s ease-in-out 0s;
      border: 2px solid var(--color-secondary-blue);    
    `}
  }


`;


export const Time = styled.div<typeProps>`
  margin-top: 50px;
  border: none !important;

  ${props => props.typePomo === 'pomodoro' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 1px solid var(--color-secondary-orange);
    background-color: var(--color-secondary-orange);  
  `}
  ${props => props.typePomo === 'short_break' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 1px solid var(--color-secondary-green);
    background-color: var(--color-secondary-green);  
  `}
  ${props => props.typePomo === 'long_break' && css`
    transition: border background-color 0.5s ease-in-out 0s;
    border: 1px solid var(--color-secondary-blue);
    background-color: var(--color-secondary-blue);  
  `}

  border-radius: 6px;
  padding: 25px 12px;
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

  .countDown {
    padding-bottom: 12px;
    width: 100%;
    
    span {
      font-size: 120px;
      font-weight: bold;
      margin-top: 20px;
    }

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

  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
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
    background: rgba(255, 255, 255, 0.2);
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
  border: 2px dashed rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;

  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: bold;
    margin-left: 10px;
    color: #fff;
  }
`;


export const Footer = styled.div`
  border: 2px solid #efefef;
  padding-top: 40px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    max-width: 620px;
    margin-bottom: 17px;

    color: #7f6769;
    
    a svg {
      margin: 6px 4px;
    }

    span {
      font-weight: bold;

      & + span {
        margin-left: 10px;
      }
    }

    strong {
      color: #ed8a8e;
    }

    small {
      color: #b6aaaa;
    }
  }
`;

export const Content = styled.div`
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;

  h1 {
    padding-bottom: 20px;
    color: #541c1f;
    width: 620px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 

    width: 620px;
    margin-bottom: 18px;

    h2 {
      color: #5e2b2f;
      margin-top: 25px;
    }

    h2::after {
      content: '';
      display: block;
      width: 24px;
      padding-top: 8px;
      border-bottom: 4px solid var(--color-primary-orange);
      opacity: 0.6;
    }
    
    ol {
      margin: 16px 0;
      font-size: 16px;
      padding-left: 25px;

      li {
        margin: 12px 0;
        color: #785e60;
        line-height: 1.6em;
      }
    }

    ul {
      margin: 16px 0;
      font-size: 18px;
      padding-left: 25px;

      li {
        margin: 12px 0;
        color: #785e60;
        line-height: 1.6em;
        display: list-item;
      }

      li::before {
        content: '';
        color: red;
        font-weight: bold;
        display: inline-block; 
        width: 1em;
        margin-left: -1em;
      }
    }

    p {
      color: #7c6365;
      line-height: 1.6em;
      margin-top: 18px;
      font-size: 18px;

      a {
        font-weight: bold;
        text-decoration: none;
        color: #e96d73;
      }
    }
  }
`;
