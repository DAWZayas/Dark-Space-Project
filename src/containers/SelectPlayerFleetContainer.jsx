import { connect } from 'react-redux';

import SelectPlayerFleet from '../components/SelectPlayerFleet';
import { prepareToFight, onChangeEnemyFleet } from '../actions';


function mapStateToProps(state) {
  return {
		campaignState : state.campaign,
		playerFleetState : state.playerFleet,
		enemyPlayerFleetState : state.enemyPlayerFleet,
		navesState : state.naves,
		pointsState : state.points
  };
}

function mapActionsToProps(dispatch) {
  return {
    onPrepareToFight : (playerSpaceFleetArray) => dispatch(prepareToFight(playerSpaceFleetArray)),
    onChangeEnemyFleet : (playerFleet) => dispatch(onChangeEnemyFleet(playerFleet))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SelectPlayerFleet);

