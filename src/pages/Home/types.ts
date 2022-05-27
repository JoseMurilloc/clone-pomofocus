import { Status } from "../../commons/types/status"

export type typeProps = {
  typePomodoro: Status;
}

export type Option = {
  status: Status;
  label: string;
}

export type Task = {
  title: string
  est: {
    current: number;
    final: number;
  };
  note?: string;
  finally: boolean;
}

