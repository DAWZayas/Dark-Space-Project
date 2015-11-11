import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import campaign from './campaign';
import playerFleet from './playerFleet';
import points from './points';

const darkSpaceProjectApp = combineReducers({
  campaign,
  playerFleet,
  points,
  router
});

export default darkSpaceProjectApp;
