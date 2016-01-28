import { SET_POINTS } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('points');

    ref.on('value', snapshot => dispatch({
      type: SET_POINTS,
      points: Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name, missionpoints: Object.keys(snapshot.val()[id].missionpoints).map( key => snapshot.val()[id].missionpoints[key] ) }) )
    }));
  };
}
