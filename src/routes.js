import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import CampaignContainer from './containers/CampaignContainer';
import PointsContainer from './containers/PointsContainer';
import TutorialContainer from './containers/TutorialContainer';
import SelectPlayerFleetContainer from './containers/SelectPlayerFleetContainer';
import SelectEnemyFleetContainer from './containers/SelectEnemyFleetContainer';
import BattleReportContainer from './containers/BattleReportContainer';

export default (
  <Route path="" component={App} >
		<Route path="/" component={Home} />
		<Route path="campaign" component={CampaignContainer} />
		<Route path="points" component={PointsContainer} />
		<Route path="tutorial" component={TutorialContainer} />
		<Route path="select/:idCampaign" component={SelectPlayerFleetContainer} />
    <Route path="selectEnemy/:idCampaign" component={SelectEnemyFleetContainer} />
    <Route path="battleReport" component={BattleReportContainer} />
    <Redirect path="*" to="/" />
  </Route>
);
