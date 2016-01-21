import {
  SET_CAMPAIGN, ADD_CAMPAIGN, REMOVE_CAMPAIGN, CHANGE_FLEET
} from './action-types';

export function setCampaign(campaign) {
  return { type: SET_CAMPAIGN, campaign };
}


export function onAddCampaign(id, title) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    let campaignObject = {
      "id": id + 1,
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
  firebase.child(`campaign/${id}`).set(campaignObject);
  };
}

export function onRemoveCampaign(id) {
    return (dispatch, getState) => {
    const { firebase } = getState();
  firebase.child(`campaign/${id - 1}`).remove();
  };
}

export function onChangeFleet(enemySpaceFleetArray, idCampaign){
  return { type: CHANGE_FLEET, enemySpaceFleetArray, idCampaign};
}
