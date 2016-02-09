import { connect } from 'react-redux';
import * as notificationActions from '../actions/notifications';
import Notifications from '../components/Notifications';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    notifications: state.notifications
  };
}

export default connect(
  mapStateToProps,
  Object.assign( {}, notificationActions)
)(Notifications);

