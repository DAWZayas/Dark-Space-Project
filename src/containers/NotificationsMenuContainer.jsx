import { connect } from 'react-redux';
import NotificationsMenu from '../components/NotificationsMenu';

function mapStateToProps(state) {
  return {
    total: state.notifications.length,
    pending: state.notifications.filter( notify => !notify.status).length
  };
}

export default connect(
  mapStateToProps
)(NotificationsMenu);
