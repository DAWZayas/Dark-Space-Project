import clone from 'clone';
import { ON_REMOVE_MISSION_POINTS, ON_ADD_POINT, ON_REMOVE_MISSION_FOR_POINTS, ON_BATTLE_RESULT, SET_POINTS} from '../actions/points';

export const initialState = [
  {
    name: 'David',
    missionpoints:[485, 326, 261, 149, 0 ]
  }
];

function setPoints(state, points){
  return points.slice();
}

/*function onRemoveMissionPoints (state, iduser, missionnumber) {
  const newState = clone(state);
   newState[iduser].missionpoints[missionnumber] = 0;
   return newState;
}
*/
/*
function onAddPoint(state){
  const newState = clone(state);
  for (let i = 0; i < newState.length; i++){
    newState[i].missionpoints.push(0);
  }
  return newState;
}
*/
function onRemoveMissionForPoints(state, idCampaign){
   const newState = clone(state);
  for (let i = 0; i < newState.length; i++){
    newState[i].missionpoints.splice((idCampaign - 1), 1);
  }
  return newState;
}

function onBattleResult(state, idCampaign, points){
  const newState = clone(state);
  if (newState[1].missionpoints[idCampaign - 1] < points){
    newState[1].missionpoints[idCampaign - 1] = points;
  }
  return newState;
}

export default function pointsReducer(state = initialState, action) {
  switch (action.type) {
      case SET_POINTS:
        return setPoints(state, action.points);
      /*case ON_REMOVE_MISSION_POINTS:
        return onRemoveMissionPoints(state, action.iduser, action.missionnumber);*/
      /*case ON_ADD_POINT:
        return onAddPoint(state);*/
      case ON_REMOVE_MISSION_FOR_POINTS:
        return onRemoveMissionForPoints(state, action.idCampaign);
      case ON_BATTLE_RESULT:
        return onBattleResult(state, action.idCampaign, action.points);
      default:
        return state;
      }
  }
