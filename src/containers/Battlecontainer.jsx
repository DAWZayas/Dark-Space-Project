import { connect } from 'react-redux';

import Battle from '../components/Battle';


function mapStateToProps(state) {
  return {
    playerft: state.playerFleet,
    enemyplayerft:state.enemyPlayerFleet,
    navpoints:state.naves,
   // campaigns: state.campan
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Battle);
