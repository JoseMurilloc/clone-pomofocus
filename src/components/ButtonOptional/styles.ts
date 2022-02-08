import styled, { css } from "styled-components";
import { Status } from "../../commons/types/status";

type ButtonOptionalProps = {
  enableButton: boolean
  types: Status
}

export const Container = styled.button<ButtonOptionalProps>`
  background: transparent;
  color: #eee;
  font-weight: bold;
  border: 0;
  font-size: 16px;
  padding: 5px 12px;
  border-radius: 6px;
  
  ${props => props.enableButton && css`
    background: rgba(0, 0, 0, 0.15);
  `};
  
  & + button {
    margin-left: 20px;
  }
`;