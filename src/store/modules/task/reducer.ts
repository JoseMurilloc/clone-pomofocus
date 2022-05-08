import {Action, ITaskState, ActionTypes} from './types';

const INITIAL_STATE: ITaskState = {
  tasks: []
};

export default function task(
  state: ITaskState = INITIAL_STATE,
  action: Action,
) {
  switch (action.type) {
    case ActionTypes.getAllTask:
      return {...state.tasks}
    case ActionTypes.addNewTask:
      return {...state, tasks: [...state.tasks, action.payload.newTask]}
    default:
      return state;
  }
}

