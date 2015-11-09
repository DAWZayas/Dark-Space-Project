import { REMOVE_CAMPAIGN } from '../actions';

function removeCampaign(state, idCampaign) {
  return state.filter(mission => mission.id !== idCampaign);
}

export default function campaignReducer(state = [], action) {
		switch (action.type) {
			case REMOVE_CAMPAIGN:
				return removeCampaign(state, action.idCampaign);
			default:
				return state;
			}
  }
