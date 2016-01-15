
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import campaign from './campaign';
import playerFleet from './playerFleet';
import enemyPlayerFleet from './enemyPlayerFleet';
import playerFleetAfterFight from './playerFleetAfterFight';
import enemyPlayerFleetAfterFight from './enemyPlayerFleetAfterFight';
import points from './points';
import naves from './naves';
import firebase from './firebase';

const darkSpaceProjectApp = combineReducers({
  campaign,
  playerFleet,
  playerFleetAfterFight,
  enemyPlayerFleet,
  enemyPlayerFleetAfterFight,
  points,
  naves,
  firebase,
  router
});

export default darkSpaceProjectApp;

