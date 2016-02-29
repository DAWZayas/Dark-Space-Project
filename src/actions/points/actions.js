import {
  SET_POINTS, ON_REMOVE_MISSION_POINTS, ON_REMOVE_MISSION_FOR_POINTS, ON_BATTLE_RESULT, ON_ADD_POINT
} from './action-types';
import alertify from 'alertifyjs/build/alertify.min.js';

export function setPoints(points) {
  return { type: SET_POINTS, points };
}

export function onRemoveMissionPoints(iduser, missionnumber) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    let missionId;
    firebase.child(`points/${iduser}/missionpoints`).once('value', snapshot =>
      {  missionId = Object.keys(snapshot.val())[missionnumber],
        firebase.child(`points/${iduser}/missionpoints/${missionId}`).set(0);
      let key;
      let title;
      let notify;
      firebase.child(`campaign`).once( 'value', snapshot =>
       { key = Object.keys( snapshot.val() )[missionnumber],
        title = snapshot.val()[key].title,
        notify = {message: `Points for mission ${missionnumber + 1} : "${title}" set to 0`, status: false};
        firebase.child(`points/${iduser}/notifications`).push(notify);
        alertify.success(`Points for mission ${missionnumber + 1} : "${title}" set to 0`);
      });

    });
  };
}

export function onAddPoint(id, users) {
    return (dispatch, getState) => {
      const { firebase } = getState();
      firebase.child('points').once('value', snapshot =>
        Object.keys(snapshot.val() || []).map(id => ( firebase.child(`points/${id}/missionpoints`).push(0)))
      );
    };
}

export function onRemoveMissionForPoints(numberMission){
    return (dispatch, getState) => {
      const { firebase } = getState();
      let missionKey;
      firebase.child('points').once('value', snapshot =>
        Object.keys(snapshot.val() || []).map( idUser => (
          missionKey = Object.keys(snapshot.val()[idUser].missionpoints)[numberMission],
          firebase.child(`points/${idUser}/missionpoints/${missionKey}`).remove()
        ))
      );
    };
}


export function onBattleResult(idCampaign, points, iduser){
    return (dispatch, getState) => {
    const { firebase, auth } = getState();
    let idMission, oldPoints, title, key, notify;
    firebase.child(`points/${auth.id}/missionpoints`).once('value', snapshot =>
     {     idMission = Object.keys(snapshot.val())[idCampaign],
            oldPoints = snapshot.val()[idMission];

        if ( points > oldPoints ) {
            firebase.child(`points/${auth.id}/missionpoints/${idMission}`).set(points);
            firebase.child(`campaign`).once( 'value', snapshot => {
              key = Object.keys( snapshot.val())[idCampaign];
              title = snapshot.val()[key];
              notify = {message: `Points for mission ${parseInt(idCampaign) + 1 }: "${title}" updated with ${points} points`, status: false};
              firebase.child(`points/${auth.id}/notifications`).push(notify);
              alertify.success(`Points for mission ${parseInt(idCampaign) + 1 }: "${title}" updated with ${points} points`);
            });
        }
   } );

    };
}
