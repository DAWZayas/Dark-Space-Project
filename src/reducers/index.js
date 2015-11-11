import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import campaign from './campaign';
import playerFleet from './playerFleet';
import enemyPlayerFleet from './enemyPlayerFleet';
import points from './points';

const darkSpaceProjectApp = combineReducers({
  campaign,
  playerFleet,
  enemyPlayerFleet,
  points,
  router
});

export default darkSpaceProjectApp;
