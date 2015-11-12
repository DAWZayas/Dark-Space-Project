
import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import campaign from './campaign';
import playerFleet from './playerFleet';
import enemyPlayerFleet from './enemyPlayerFleet';
import points from './points';
import naves from './naves';

const darkSpaceProjectApp = combineReducers({
  campaign,
  playerFleet,
  enemyPlayerFleet,
  points,
  naves,
  router
});

export default darkSpaceProjectApp;

