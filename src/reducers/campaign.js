import { ADD_CAMPAIGN, REMOVE_CAMPAIGN, CHANGE_FLEET } from '../actions';

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
        points : 18
      },
      {
        id: 4,
        name:'Tie Fighter',
        damage : 2,
        agility : 3,
        hull : 3,
        shields : 0,
        points : 12
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
			case ADD_CAMPAIGN:
				return addCampaign(state, action.title);
			case REMOVE_CAMPAIGN:
				return removeCampaign(state, action.idCampaign);
      case CHANGE_FLEET:
        return changeFleet(state, action.enemySpaceFleetArray, action.idCampaign);
			default:
				return state;
			}
  }
