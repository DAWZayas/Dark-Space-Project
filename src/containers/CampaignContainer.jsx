import { connect } from 'react-redux';

import Campaign from '../components/Campaign';
import { addCampaign, removeCampaign, onAddPoint, onRemoveMissionForPoints} from '../actions';


function mapStateToProps(state) {
  return {
    campaigns: state.campaign,
    points: state.points[1]
  };
}

function mapActionsToProps(dispatch) {
  return {
    onAddCampaign : title => dispatch(addCampaign(title)),
    onRemoveCampaign : idCampaign => dispatch(removeCampaign(idCampaign)),
    onRemoveMissionForPoints : idCampaign => dispatch(onRemoveMissionForPoints(idCampaign)),
    onAddPoint: () => dispatch(onAddPoint())
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Campaign);
