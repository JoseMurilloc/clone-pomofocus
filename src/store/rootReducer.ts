import {combineReducers} from 'redux';
import modal from './modules/modal/reducer';

const reducers = combineReducers({
  modal,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
