import { connect } from 'react-redux';

import BattleReport from '../components/BattleReport';
import {  } from '../actions';


function mapStateToProps(state) {
  return {
    playerSpaceFleet : state.playerFleet,
    enemySpaceFleet : state.enemyPlayerFleet
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BattleReport);
