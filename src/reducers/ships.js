import { SET_SHIPS } from '../actions/tutorial';


export const initialState = {
    "0":{
      "id": null,
      "name":"*** unknown ***",
      "damage" : null,
      "agility" : null,
      "hull" : null,
      "shields" : null,
      "points" : null,
      "img" : "*** unknown ***"
    }
};

function setShips(state, ships){
  return ships.slice();
}

export default function navesReducer(state = initialState, action ) {
  switch (action.type) {
      case SET_SHIPS:
        return setShips(state, action.ships);
      default:
        return state;
    }
  }
