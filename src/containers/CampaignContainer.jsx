import { connect } from 'react-redux';

import Campaign from '../components/Campaign';
import * as campaignActions from '../actions/campaign';
import { onAddPoint, onRemoveMissionForPoints } from '../actions/points';

function mapStateToProps(state) {
	let i = 0;
	let id = 0;
	while (i < state.points.length){
		if (state.auth.id === state.points[i].id){
			id = i;
		}
		i++;
	}
  return {
    campaigns: state.campaign,
    points: state.points[id],
    users: state.points
  };
}

export default connect(
  mapStateToProps,
  Object.assign( {}, campaignActions, { onAddPoint }, {onRemoveMissionForPoints} )
)(Campaign);
