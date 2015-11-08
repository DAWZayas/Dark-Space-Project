import { connect } from 'react-redux';

import Campaign from '../components/Campaign';


function mapStateToProps(state) {
  return {
    campaigns: state.campaign
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Campaign);

