import clone from 'clone';
import { ON_REMOVE_MISSION_POINTS } from '../actions';

function onRemoveMissionPoints (state, iduser, missionnumber) {
  const newState = clone(state);
   newState[iduser].missionpoints[missionnumber] = 0;
   return newState;
}

export default function pointsReducer(state = [], action) {
	switch (action.type) {
      case ON_REMOVE_MISSION_POINTS:
        return onRemoveMissionPoints(state, action.id, action.pos);
      default:
        return state;
      }
  }
