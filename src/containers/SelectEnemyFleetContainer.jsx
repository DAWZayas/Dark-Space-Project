import { connect } from 'react-redux';

import SelectEnemyFleet from '../components/SelectEnemyFleet';
import * as campaignActions from '../actions/campaign';


function mapStateToProps(state) {
  return {
    campaignState : state.campaign,
    playerFleetState : state.playerFleet,
    enemyPlayerFleetState : state.enemyPlayerFleet,
    navesState : state.ships,
    pointsState : state.points
  };
}

export default connect(
  mapStateToProps,
  campaignActions
)(SelectEnemyFleet);
