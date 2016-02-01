import { ADD_CAMPAIGN, REMOVE_CAMPAIGN, CHANGE_FLEET, SET_CAMPAIGN } from '../actions/campaign';

function setCampaign(state, campaign){
  return campaign.slice();
}

function changeFleet(state, enemySpaceFleetArray, idCampaign) {
  state[(idCampaign - 1)].playerFleet = enemySpaceFleetArray;
  return state;
}

function addCampaign(state, title) {
  let id = (state.length + 1);
  return state.concat({
    id: id,
    title: title,
    percentage: 0,
    playerFleet:[
      {
        id: 3,
        name:'Tie Interceptor',
        damage : 3,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 18,
        img : "http://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Tie-Interceptor-icon.png"
      },
      {
        id: 4,
        name:'Tie Fighter',
        damage : 2,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 12,
        img : "http://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/128/Tie-Fighter-01-icon.png"
      }
    ]
  });
}

function removeCampaign(state, idCampaign) {
  const newState = state.filter(mission => mission.id !== idCampaign);
  for (let i = idCampaign - 1; i < newState.length; i++) {
    newState[i].id = (i + 1 );
  }
  return newState;
}


export default function campaignReducer(state = [], action) {
    switch (action.type) {
      case SET_CAMPAIGN:
        return setCampaign(state, action.campaign);
      default:
        return state;
      }
  }
