import { pushState } from 'redux-router';

/*
 * action types
 */

export const ADD_CAMPAIGN = 'ADD_CAMPAIGN';
export const REMOVE_CAMPAIGN = 'REMOVE_CAMPAIGN';
export const PREPARE_FIGHT = 'PREPARE_FIGHT';
export const CHANGE_FLEET = 'CHANGE_FLEET';
export const CHANGE_ENEMY_FLEET = 'CHANGE_ENEMY_FLEET';
export const ON_REMOVE_MISSION_POINTS = 'ON_REMOVE_MISSION_POINTS';

/*
 * Campaign action creators
 */

export function addCampaign(title) {
  return { type: ADD_CAMPAIGN, title };
}

export function removeCampaign(idCampaign) {
  return { type: REMOVE_CAMPAIGN, idCampaign };
}

export function onChangeFleet(enemySpaceFleetArray, idCampaign){
  return { type: CHANGE_FLEET, enemySpaceFleetArray, idCampaign};
}


/*
 * Player fleet action creators
 */

export function prepareToFight(playerSpaceFleetArray){
	return { type: PREPARE_FIGHT, playerSpaceFleetArray};
}

/*
 * Enemy fleet action creators
 */

export function onChangeEnemyFleet(playerFleet){
	return { type: CHANGE_ENEMY_FLEET, playerFleet};
}

/*
*Points action creator
*/

export function onRemoveMissionPoints(iduser, missionnumber) {
    return { type: ON_REMOVE_MISSION_POINTS, iduser, missionnumber};
}
