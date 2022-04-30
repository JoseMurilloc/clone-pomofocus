export enum ActionTypes {
  openProfileModal = 'OPEN_PROFILE_MODAL',
  closeProfileModal = 'CLOSE_PROFILE_MODAL',
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};

export type IModalState = {
  isProfileModel: boolean;
};
