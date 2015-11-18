import { connect } from 'react-redux';

import BattleReport from '../components/BattleReport';
import { onChangePlayerSpaceFleetAfterFight, onChangeEnemySpaceFleetAfterFight } from '../actions';


function mapStateToProps(state) {
  return {
    playerSpaceFleet : state.playerFleet,
    enemySpaceFleet : state.enemyPlayerFleet
  };
}

function mapActionsToProps(dispatch) {
  return {
    onChangePlayerSpaceFleetAfterFight : ( resultArray ) => dispatch(onChangePlayerSpaceFleetAfterFight(resultArray)),
    onChangeEnemySpaceFleetAfterFight : ( resultArray ) => dispatch(onChangeEnemySpaceFleetAfterFight(resultArray))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BattleReport);
