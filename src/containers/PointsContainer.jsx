import { connect } from 'react-redux';

import Points from '../components/Points';


function mapStateToProps(state) {
  return {
    polls: state.polls
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

