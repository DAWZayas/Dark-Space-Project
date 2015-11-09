import React, { Component, PropTypes } from 'react';
import CampaignItem from './CampaignItem';

export default class Campaign extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { campaigns, onRemoveCampaign } = this.props;

    return (
      <div className="row">
        <div className="col-lg-12">
          <h2 className="col-lg-12">Campaign</h2>
          <ul>
            {
              campaigns.map ((campaign) => <CampaignItem key={campaign.id} id={campaign.id} tittle={campaign.tittle} status={campaign.status} onRemoveCampaign={onRemoveCampaign}/>)
            }
          </ul>
       </div>
      </div>
    );
  }
}

Campaign.propTypes = {
  campaigns:PropTypes.array.isRequired,
  onRemoveCampaign:PropTypes.func.isRequired
};
