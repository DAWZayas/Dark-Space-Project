import { SET_CAMPAIGN } from './action-types';
import {SET_POINTS } from '../points/action-types';
export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('campaign');
    const ref1 = firebase.child('points');

    ref.on('value', snapshot => dispatch({
      type: SET_CAMPAIGN,
      campaign: Object.keys(snapshot.val() || []).map( id => ({id, title:snapshot.val()[id].title, playerFleet:snapshot.val()[id].playerFleet}) )
    }));

    ref1.on('value', snapshot => dispatch({
      type: SET_POINTS,
      points: Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name, missionpoints:snapshot.val()[id].missionpoints }) )
    }));
  };
}
