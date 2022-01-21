export type Status = 'pomodoro' | 'short_break' | 'long_break';

export type typeProps = {
  typePomodoro: Status;
} 

export type Option = {
  status: Status;
  label: string;
}
