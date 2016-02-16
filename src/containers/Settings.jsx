import { connect } from 'react-redux';
import * as settingActions from '../actions/settings';
import Settings from '../components/Settings';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    firebase: state.firebase
  };
}

export default connect(
  mapStateToProps,
  Object.assign( {}, settingActions)
)(Settings);
