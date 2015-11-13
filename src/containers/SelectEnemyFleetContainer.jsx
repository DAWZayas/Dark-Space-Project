import { connect } from 'react-redux';

import SelectEnemyFleet from '../components/SelectEnemyFleet';
import { onChangeFleet } from '../actions';


function mapStateToProps(state) {
  const idCapaign = state.router.params.campaign;
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
    onChangeFleet : (enemySpaceFleetArray, idCampaign) => dispatch(onChangeFleet(enemySpaceFleetArray, idCampaign))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SelectEnemyFleet);
