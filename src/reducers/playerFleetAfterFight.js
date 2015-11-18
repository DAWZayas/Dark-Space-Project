import { ON_CHANGE_PLAYER_SPACE_FLEET_AFTER_FIGHT } from '../actions';

function onChangePlayerSpaceFleetAfterFight(state, resultArray) {
  return resultArray;
}

export default function playerFleetAfterFightReducer(state = [], action) {
    switch (action.type) {
      case ON_CHANGE_PLAYER_SPACE_FLEET_AFTER_FIGHT:
        return onChangePlayerSpaceFleetAfterFight(state, action.resultArray);
      default:
        return state;
    }
}
