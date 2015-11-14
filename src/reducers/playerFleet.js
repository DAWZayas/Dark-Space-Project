import { PREPARE_FIGHT } from '../actions';

function prepareFight(state, playerSpaceFleetArray) {
	return playerSpaceFleetArray;
}

export default function playerFleetReducer(state = [], action) {
		switch (action.type) {
			case PREPARE_FIGHT:
				return prepareFight(state, action.playerSpaceFleetArray);
			default:
				return state;
			}
  }
