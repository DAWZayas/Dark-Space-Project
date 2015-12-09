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
    onBattleResult : (idCampaign) => dispatch(onBattleResult(idCampaign))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BattleResult);
