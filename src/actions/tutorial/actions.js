import {
  SET_SHIPS
} from './action-types';

export function setShips(ships) {
  return { type: SET_SHIPS, ships };
}
