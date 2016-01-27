import {
  SET_POINTS, ON_REMOVE_MISSION_POINTS, ON_REMOVE_MISSION_FOR_POINTS, ON_BATTLE_RESULT, ON_ADD_POINT
} from './action-types';

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
    console.log(x);
    firebase.child(`points/${iduser}/missionpoints/${x}`).set(0);
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

export function onBattleResult(idCampaign, points){
    return (dispatch, getState) => {
    const { firebase } = getState();

    let x;
    firebase.child('points').on('value', snapshot =>
      x = Object.keys(snapshot.val() || []).map( id => ({id, name:snapshot.val()[id].name, missionpoints: Object.keys(snapshot.val()[id].missionpoints).map( key => ({ key, valor: snapshot.val()[id].missionpoints[key] }) ) }) )
    );
    let id = x[0].id;
    let idMission = x[0].missionpoints[idCampaign].key;
    let missionpoints = x[0].missionpoints[idCampaign].valor;
    console.log(id);
    console.log(idMission);
    console.log(missionpoints);
    if ( points > missionpoints ) {
      firebase.child(`points/${id}/missionpoints/${idMission}`).set(points);
    }
    };
}
