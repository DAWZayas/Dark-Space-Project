import { connect } from 'react-redux';

import Settings from '../components/Settings';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    firebase: state.firebase
  };
}

export default connect(
  mapStateToProps
)(Settings);

