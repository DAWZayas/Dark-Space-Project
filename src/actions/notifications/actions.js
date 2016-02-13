import {
  SET_NOTIFICATIONS
} from './action-types';

export function setNotifications(notifications) {
  return { type: SET_NOTIFICATIONS, notifications };
}


export function reed(iduser){
	return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`points/${iduser}/notifications`).once('value', snapshot =>
      Object.keys(snapshot.val() || []).map( key => firebase.child(`points/${iduser}/notifications/${key}`).update({ message: snapshot.val()[key].message, status: snapshot.val()[key].status = true }) ) );
    };
}

export function remove(iduser, key){
	return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`points/${iduser}/notifications/${key}`).remove();
};
}

export function clear(iduser, key){
	return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`points/${iduser}/notifications`).remove();
};
}
