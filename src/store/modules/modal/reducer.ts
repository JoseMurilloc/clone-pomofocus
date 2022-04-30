import {Action, ActionTypes, IModalState} from './types';

const INITIAL_STATE: IModalState = {
  isProfileModel: false
};

export default function modal(
  state: IModalState = INITIAL_STATE,
  action: Action,
) {
  switch (action.type) {
    case ActionTypes.openProfileModal:
      return { ...state, isProfileModel: action.payload.profileState };
    case ActionTypes.closeProfileModal:
      return { ...state, isProfileModel: false };
    default:
      return state;
  }
}
