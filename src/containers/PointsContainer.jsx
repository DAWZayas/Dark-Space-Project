import { connect } from 'react-redux';

import Points from '../components/Points';
import { onRemoveMissionPoints } from '../actions';


function mapStateToProps(state) {
  return {
    points: state.points
  };
}

function mapActionsToProps(dispatch) {
  return {
    onRemoveMissionPoints : (id, pos) => dispatch(onRemoveMissionPoints(id, pos))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Points);

