import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import campaign from './campaign';
import playerFleet from './playerFleet';

const darkSpaceProjectApp = combineReducers({
  campaign,
  playerFleet,
  router
});

export default darkSpaceProjectApp;
