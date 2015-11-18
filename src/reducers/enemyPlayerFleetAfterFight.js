import { ON_CHANGE_ENEMY_SPACE_FLEET_AFTER_FIGHT } from '../actions';

function onChangeEnemySpaceFleetAfterFight(state, resultArray) {
  return resultArray;
}

export default function playerFleetAfterFightReducer(state = [], action) {
    switch (action.type) {
      case ON_CHANGE_ENEMY_SPACE_FLEET_AFTER_FIGHT:
        return onChangeEnemySpaceFleetAfterFight(state, action.resultArray);
      default:
        return state;
    }
}
