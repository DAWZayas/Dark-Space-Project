import { REMOVE_CAMPAIGN } from '../actions';

function removeCampaign(state, idCampaign) {
  const newState = state.filter(mission => mission.id !== idCampaign);
  for (let i = idCampaign-1; i < newState.length; i++) {
    newState[i].id = (i + 1 );
  }
  return newState;
}

export default function campaignReducer(state = [], action) {
		switch (action.type) {
			case REMOVE_CAMPAIGN:
				return removeCampaign(state, action.idCampaign);
			default:
				return state;
			}
  }
