import { connect } from 'react-redux';
import BattleResult from '../components/BattleResult';

function mapStateToProps(state) {
  return {
    playerFleetAfterFight : state.playerFleetAfterFight,
    enemyPlayerFleetAfterFight : state.enemyPlayerFleetAfterFight
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BattleResult);
