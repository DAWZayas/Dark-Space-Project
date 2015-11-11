import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import campaign from './campaign';
import playerFleet from './playerFleet';
import enemyPlayerFleet from './enemyPlayerFleet';

const darkSpaceProjectApp = combineReducers({
  campaign,
  playerFleet,
  enemyPlayerFleet,
  router
});

export default darkSpaceProjectApp;
