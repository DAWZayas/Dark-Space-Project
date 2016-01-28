import { connect } from 'react-redux';
import BattleResult from '../components/BattleResult';
import * as pointsActions from '../actions/points';

function mapStateToProps(state) {
  return {
    playerFleetAfterFight : state.playerFleetAfterFight,
    enemyPlayerFleetAfterFight : state.enemyPlayerFleetAfterFight
  };
}

export default connect(
  mapStateToProps,
  pointsActions
)(BattleResult);
