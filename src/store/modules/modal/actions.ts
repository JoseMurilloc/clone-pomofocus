import {ActionTypes} from './types';

export function openProfileModalAction(profileState: boolean) {
  return {
    type: ActionTypes.openProfileModal,
    payload: {profileState},
  };
}

export function closeProfileModalAction() {
  return {
    type: ActionTypes.openProfileModal,
    payload: {},
  };
}
