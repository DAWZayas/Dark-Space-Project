import { SET_NOTIFICATIONS } from './action-types';


export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref1 = firebase.child('points');
    ref1.on('value', snapshot => dispatch({
      type: SET_NOTIFICATIONS,
      points: Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name, notifications: Object.keys(snapshot.val()[id].notifications).map( key => snapshot.val()[id].notifications[key] ) }) )
    }));
  };
}
