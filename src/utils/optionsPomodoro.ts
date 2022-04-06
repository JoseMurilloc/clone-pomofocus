import { Status } from "../commons/types/status"

type Option = {
  status: Status;
  label: string;
}

export const options: Option[] = [
  {status: 'pomodoro', label: 'Pomodoro'},
  {status: 'short_break', label: 'Short break'},
  {status: 'long_break', label: 'Long Break'},
]
