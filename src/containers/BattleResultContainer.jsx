import { connect } from 'react-redux';
import BattleResult from '../components/BattleResult';
import { onBattleResult } from '../actions';

function mapStateToProps(state) {
  return {
    playerFleetAfterFight : state.playerFleetAfterFight,
    enemyPlayerFleetAfterFight : state.enemyPlayerFleetAfterFight
  };
}

function mapActionsToProps(dispatch) {
  return {
    onBattleResult : (idCampaign, points) => dispatch(onBattleResult(idCampaign, points))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BattleResult);
