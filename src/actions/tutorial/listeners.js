import { SET_SHIPS } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('ships');

    ref.on('value', snapshot => dispatch({
      type: SET_SHIPS,
      ships: snapshot.val()
//      ships: Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name}) )
    }));
  };
}
