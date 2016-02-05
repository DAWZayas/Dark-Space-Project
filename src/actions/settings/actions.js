import {
  CHANGE_USERNAME, CHANGE_USERIMAGE
} from './action-types';

export function changeUserName(id, newName) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
  firebase.child(`points/${id}/name`).set(newName);
  };
}

export function changeUserImage(id, newImage) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
  firebase.child(`points/${id}/avatar`).set(newImage);
  };
}
