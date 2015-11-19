import { connect } from 'react-redux';

import Campaign from '../components/Campaign';
import { addCampaign, removeCampaign } from '../actions';


function mapStateToProps(state) {
  return {
    campaigns: state.campaign,
    points: state.points[0]
  };
}

function mapActionsToProps(dispatch) {
  return {
		onAddCampaign : title => dispatch(addCampaign(title)),
    onRemoveCampaign : idCampaign => dispatch(removeCampaign(idCampaign))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Campaign);

