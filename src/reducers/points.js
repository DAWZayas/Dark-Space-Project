import clone from 'clone';
import { ON_REMOVE_MISSION_POINTS, ON_ADD_POINT, ON_REMOVE_MISSION_FOR_POINTS} from '../actions';

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

function onRemoveMissionForPoints(state, idCampaign){
   const newState = clone(state);
  for (let i = 0; i < newState.length; i++){
    newState[i].missionpoints.splice((idCampaign - 1), 1);
  }
  return newState;
}

export default function pointsReducer(state = [], action) {
  switch (action.type) {
      case ON_REMOVE_MISSION_POINTS:
        return onRemoveMissionPoints(state, action.iduser, action.missionnumber);
      case ON_ADD_POINT:
        return onAddPoint(state);
      case ON_REMOVE_MISSION_FOR_POINTS:
        return onRemoveMissionForPoints(state, action.idCampaign);
      default:
        return state;
      }
  }
