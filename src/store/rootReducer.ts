import {combineReducers} from 'redux';
import modal from './modules/modal/reducer';
import task from './modules/task/reducer';

const reducers = combineReducers({
  modal,
  task
});

export default reducers;

export type State = ReturnType<typeof reducers>;
