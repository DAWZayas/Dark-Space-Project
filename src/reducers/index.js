
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import campaign from './campaign';
import playerFleet from './playerFleet';
import enemyPlayerFleet from './enemyPlayerFleet';
import playerFleetAfterFight from './playerFleetAfterFight';
import enemyPlayerFleetAfterFight from './enemyPlayerFleetAfterFight';
import points from './points';
import ships from './ships';
import firebase from './firebase';
import auth from './auth';

const darkSpaceProjectApp = combineReducers({
  campaign,
  playerFleet,
  playerFleetAfterFight,
  enemyPlayerFleet,
  enemyPlayerFleetAfterFight,
  points,
  ships,
  firebase,
  router,
  auth
});

export default darkSpaceProjectApp;

