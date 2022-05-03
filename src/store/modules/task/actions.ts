import {ActionTypes, Task} from './types';

export function getAllTaskAction() {
  return {
    type: ActionTypes.getAllTask,
    payload: {},
  };
}

export function addNewTaskAction(newTask: Task) {
  return {
    type: ActionTypes.addNewTask,
    payload: {newTask},
  };
}
