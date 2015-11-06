import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import campaign from './campaign';

const darkSpaceProjectApp = combineReducers({
  campaign,
  router,
});

export default darkSpaceProjectApp;
