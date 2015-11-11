import { connect } from 'react-redux';

import Points from '../components/Points';


function mapStateToProps(state) {
  return {
    points: state.points
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Points);

