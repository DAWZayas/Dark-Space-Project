import { PREPARE_FIGHT } from '../actions';

function prepareFight(state, action) {
	return action.playerSpaceFleetArray;
}

export default function playerFleetReducer(state = [], action) {
		switch (action.type) {
			case PREPARE_FIGHT:
				return prepareFight(state, action);
			default:
				return state;
			}
  }
