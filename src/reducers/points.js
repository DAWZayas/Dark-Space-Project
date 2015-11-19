import clone from 'clone';
import { ON_REMOVE_MISSION_POINTS, ON_ADD_POINT } from '../actions';

function onRemoveMissionPoints (state, iduser, missionnumber) {
  const newState = clone(state);
   newState[iduser].missionpoints[missionnumber] = 0;
   return newState;
}

function onAddPoint(state){
  const newState = clone(state);
  for (let i = 0; i < newState.length; i++){
    newState[i].missionpoints.push(0);
  }
  return newState;
}

export default function pointsReducer(state = [], action) {
	switch (action.type) {
      case ON_REMOVE_MISSION_POINTS:
        return onRemoveMissionPoints(state, action.iduser, action.missionnumber);
      case ON_ADD_POINT:
        return onAddPoint(state);
      default:
        return state;
      }
  }
