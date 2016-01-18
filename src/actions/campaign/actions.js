import {
  SET_CAMPAIGN, ADD_CAMPAIGN, REMOVE_CAMPAIGN, CHANGE_FLEET
} from './action-types';

export function setCampaign(campaign) {
  return { type: SET_CAMPAIGN, campaign };
}


export function onAddCampaign(title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    let campaignObject = {
      "id": 7,
      "title": title,
      "playerFleet" : {
        "0" : {
            "id": 4,
            "name":"Tie Fighter",
            "damage" : 2,
            "agility" : 3,
            "hull" : 3,
            "shields" : 0,
            "points" : 12,
            "img" : "http://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Tie-Fighter-01-icon.png"
        }
      }
  };
    firebase.child('campaign')
      .push(campaignObject);
  };
}

export function removeCampaign(idCampaign) {
  return { type: REMOVE_CAMPAIGN, idCampaign };
}

export function onChangeFleet(enemySpaceFleetArray, idCampaign){
  return { type: CHANGE_FLEET, enemySpaceFleetArray, idCampaign};
}
