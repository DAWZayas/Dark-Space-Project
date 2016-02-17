import {
  SET_CAMPAIGN, ADD_CAMPAIGN, REMOVE_CAMPAIGN, CHANGE_FLEET
} from './action-types';
import alertify from 'alertifyjs/build/alertify.min.js';

export function setCampaign(campaign) {
  return { type: SET_CAMPAIGN, campaign };
}


export function onAddCampaign(id, title) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    let campaignObject = {
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
  firebase.child(`campaign`).push(campaignObject);
  let notify = {message: `Mission ${title} added`, status: false};
  firebase.child(`points`).once('value', snapshot =>
    Object.keys(snapshot.val()).map( (user) => firebase.child(`points/${user}/notifications`).push(notify) ));
    alertify.success(`Campaign "${title}" has been added`);
  };
}

export function onRemoveCampaign(id, title) {
    return (dispatch, getState) => {
    const { firebase, auth } = getState();
  firebase.child(`campaign/${id}`).remove();
  let notify = {message: `Mission ${title} removed`, status: false};
  firebase.child(`points`).once('value', snapshot =>
    Object.keys(snapshot.val()).map( (user) => firebase.child(`points/${user}/notifications`).push(notify) ));
    alertify.success(`Campaign "${title}" has been removed`);
  };
}

export function onChangeFleet(enemySpaceFleetArray, idCampaign){
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
  firebase.child(`campaign/${idCampaign}/playerFleet`).set(enemySpaceFleetArray);
  alertify.success(`The fleet of "${idCampaign}" has been changed`);
  };
}
