import { connect } from 'react-redux';

import Campaign from '../components/Campaign';
import * as campaignActions from '../actions/campaign';

function mapStateToProps(state) {
  return {
    campaigns: state.campaign,
    points: state.points[0]
  };
}

export default connect(
  mapStateToProps,
  campaignActions
)(Campaign);
