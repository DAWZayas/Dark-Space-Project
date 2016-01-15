import { SET_CAMPAIGN } from './action-types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('campaign');

    ref.on('value', snapshot => dispatch({
      type: SET_CAMPAIGN,
      campaign: snapshot.val()
//      ships: Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name}) )
    }));
  };
}
