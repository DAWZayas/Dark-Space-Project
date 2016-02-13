import {
  CHANGE_USERNAME, CHANGE_USERIMAGE
} from './action-types';

export function changeUserName(id, newName, message) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
  firebase.child(`points/${id}/name`).set(newName);
  let notify = {message: message, status: false};
  firebase.child(`points/${id}/notifications`).push(notify);
  };
}

export function changeUserImage(id, newImage, message) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
  firebase.child(`points/${id}/avatar`).set(newImage);
  let notify = {message: message, status: false};
  firebase.child(`points/${id}/notifications`).push(notify);
  };
}
