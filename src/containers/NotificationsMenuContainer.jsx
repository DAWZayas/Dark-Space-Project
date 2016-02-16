import { connect } from 'react-redux';
import NotificationsMenu from '../components/NotificationsMenu';
import * as notificationActions from '../actions/notifications';

function mapStateToProps(state) {
  return {
    total: state.notifications.length,
    pending: state.notifications.filter( notify => !notify.status).length,
    auth: state.auth.id
  };
}

export default connect(
  mapStateToProps,
  Object.assign( {}, notificationActions)
)(NotificationsMenu);
