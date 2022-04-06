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
  font-size: 1.6rem;
  padding: 0.5rem 1.2rem;
  border-radius: 0.6rem;

  ${props => props.enableButton && css`
    background: rgba(0, 0, 0, 0.15);
  `};

  & + button {
    margin-left: 2rem;
  }
`;
