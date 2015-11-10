import { REMOVE_CAMPAIGN } from '../actions';

function removeCampaign(state, idCampaign) {
  const newState = state.filter(mission => mission.id !== idCampaign);
<<<<<<< HEAD
  for (let i = 0; i < newState.length; i++) {
    newState[i].id = ( i + 1 );
=======
  for (let i = idCampaign-1; i < newState.length; i++) {
    newState[i].id = (i + 1 );
>>>>>>> 90dd68455d36daaf1f04d517c706746c3067b034
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
