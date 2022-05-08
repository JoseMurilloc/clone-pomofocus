export enum ActionTypes {
  getAllTask = 'GET_ALL_TASK',
  addNewTask = 'ADD_NEW_TASK'
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};

export type ITaskState = {
  tasks: Array<Task>;
};

export type Task = {
  title: string
  est: {
    current: number;
    final: number;
  };
  note?: string;
}
