import { CHANGE_ENEMY_FLEET } from '../actions';

function prepareEnemyFight(state, playerFleet) {
		return playerFleet;
}

export default function playerFleetReducer(state = [], action) {
		switch (action.type) {
			case CHANGE_ENEMY_FLEET:
				return prepareEnemyFight(state, action.playerFleet);
			default:
				return state;
			}
  }
