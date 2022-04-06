import { ButtonHTMLAttributes, Dispatch } from "react";
import { Status } from "../../commons/types/status";

export interface ButtonOptionalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  activeButton: boolean;
  status: Status;
  typePomo: Status;
  setTypePomo: Dispatch<React.SetStateAction<Status>>;
}
