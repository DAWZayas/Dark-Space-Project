import {
  SET_CAMPAIGN, ADD_CAMPAIGN, REMOVE_CAMPAIGN, CHANGE_FLEET
} from './action-types';

export function setCampaign(campaign) {
  return { type: SET_CAMPAIGN, campaign };
}

export function addCampaign(title) {
  return { type: ADD_CAMPAIGN, title };
}

export function removeCampaign(idCampaign) {
  return { type: REMOVE_CAMPAIGN, idCampaign };
}

export function onChangeFleet(enemySpaceFleetArray, idCampaign){
  return { type: CHANGE_FLEET, enemySpaceFleetArray, idCampaign};
}
