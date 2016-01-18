import { connect } from 'react-redux';

import Campaign from '../components/Campaign';
import * as campaignActions from '../actions/campaign';
import { onAddPoint } from '../actions/points';

function mapStateToProps(state) {
  return {
    campaigns: state.campaign,
    points: state.points[0]
  };
}

export default connect(
  mapStateToProps,
  Object.assign( {}, campaignActions, { onAddPoint } )
)(Campaign);
