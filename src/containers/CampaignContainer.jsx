import { connect } from 'react-redux';

import Campaign from '../components/Campaign';
import { removeCampaign } from '../actions';


function mapStateToProps(state) {
  return {
    campaigns: state.campaign
  };
}

function mapActionsToProps(dispatch) {
  return {
    onRemoveCampaign:(idCampaign)=> dispatch(removeCampaign(idCampaign))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Campaign);

