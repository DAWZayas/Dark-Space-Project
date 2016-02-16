import {
  SET_POINTS, ON_REMOVE_MISSION_POINTS, ON_REMOVE_MISSION_FOR_POINTS, ON_BATTLE_RESULT, ON_ADD_POINT
} from './action-types';
import alertify from 'alertifyjs';

export function setPoints(points) {
  return { type: SET_POINTS, points };
}

export function onRemoveMissionPoints(iduser, missionnumber) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    let x;
    firebase.child(`points/${iduser}/missionpoints`).once('value', snapshot =>
      x = Object.keys(snapshot.val())[missionnumber]
    );
    firebase.child(`points/${iduser}/missionpoints/${x}`).set(0);

    let key;
    firebase.child(`campaign`).once( 'value', snapshot =>
      key = Object.keys( snapshot.val())[missionnumber]
    );
    let title;
    firebase.child(`campaign/${key}`).once('value', snapshot =>
      title = snapshot.val().title
    );
    let notify = {message: `Points for mission "${title}" set to 0`, status: false};
    firebase.child(`points/${iduser}/notifications`).push(notify);
    alertify.success(`Points set to 0`);
  };
}

export function onAddPoint(id, users) {
    return (dispatch, getState) => {
    const { firebase } = getState();

    let x;
    firebase.child('points').on('value', snapshot =>
      x = Object.keys(snapshot.val() || []).map(id => ({id, name: snapshot.val()[id].name, missionpoints: snapshot.val()[id].missionpoints }))
    );
    let i = 0;
    let id;
    while (i < x.length){
      id = x[i].id;
      firebase.child(`points/${id}/missionpoints`).push(0);
      i++;
    }
    };
}

export function onRemoveMissionForPoints(numberMission){
    return (dispatch, getState) => {
    const { firebase } = getState();

    let x;
    firebase.child('points').on('value', snapshot =>
      x = Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name, missionpoints: Object.keys(snapshot.val()[id].missionpoints).map( key => ({ key, valor: snapshot.val()[id].missionpoints[key] }) ) }) )
    );
    let i = 0;
    let idUser, idMission;
    while (i < x.length){
      idUser = x[i].id;
      idMission = x[i].missionpoints[numberMission].key;
      firebase.child(`points/${idUser}/missionpoints/${idMission}`).remove();
      i++;
    }
    };
}

export function onBattleResult(idCampaign, points, iduser){
    return (dispatch, getState) => {
    const { firebase } = getState();
    const {auth} = getState();
    let x;
    firebase.child('points').on('value', snapshot =>
      x = Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name, missionpoints: Object.keys(snapshot.val()[id].missionpoints).map( key => ({ key, valor: snapshot.val()[id].missionpoints[key] }) ) }) )
    );
    let id = x[iduser].id;
    let idMission = x[iduser].missionpoints[idCampaign].key;
    let missionpoints = x[iduser].missionpoints[idCampaign].valor;

    if ( points > missionpoints ) {
      firebase.child(`points/${id}/missionpoints/${idMission}`).set(points);
      let key;
      firebase.child(`campaign`).once( 'value', snapshot =>
        key = Object.keys( snapshot.val())[idCampaign]
      );
      let title;
      firebase.child(`campaign/${key}`).once('value', snapshot =>
        title = snapshot.val().title
      );
      let notify = {message: `Points for mission "${title}" updated`, status: false};
     firebase.child(`points/${auth.id}/notifications`).push(notify);
    }

    };
}
