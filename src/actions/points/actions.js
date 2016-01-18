import {
  SET_POINTS, ON_REMOVE_MISSION_POINTS, ON_REMOVE_MISSION_FOR_POINTS, ON_BATTLE_RESULT, ON_ADD_POINT
} from './action-types';

export function setPoints(points) {
  return { type: SET_POINTS, points };
}

export function onRemoveMissionPoints(iduser, missionnumber) {
    return { type: ON_REMOVE_MISSION_POINTS, iduser, missionnumber};
}

export function onAddPoint() {
  return { type: ON_ADD_POINT};
}

export function onRemoveMissionForPoints(idCampaign){
  return {type: ON_REMOVE_MISSION_FOR_POINTS, idCampaign};
}

export function onBattleResult(idCampaign, points){
  return { type: ON_BATTLE_RESULT, idCampaign, points};
}
