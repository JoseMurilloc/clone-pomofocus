export type HeaderProps = {
  completeTask: boolean;
}

export type ContainerProps = {
  selectedCard: boolean;
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

export type Props = {
  task: Task;
  selected: boolean;
  onSelectedTask: React.Dispatch<React.SetStateAction<string>>
}
