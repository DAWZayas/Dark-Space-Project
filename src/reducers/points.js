import { ON_REMOVE_MISSION_POINTS } from '../actions';

function onRemoveMissionPoints (state, id, pos) {
 state[id].missionpoints[pos] = 0;
 return state;
}

export default function pointsReducer(state = [], action) {
	switch (action.type) {
      case ON_REMOVE_MISSION_POINTS:
        return onRemoveMissionPoints(state, action.id, action.pos);
      default:
        return state;
      }
  }
