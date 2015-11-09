import React, { Component, PropTypes } from 'react';
import CampaignItem from './CampaignItem';

export default class Campaign extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { campaigns } = this.props;

    return (
      <div className="row">
        <div className="col-lg-6">
         <ul>
            {
              campaigns.map ((campaign) => <CampaignItem key={campaign.id} id={campaign.id} tittle={campaign.tittle} status={campaign.status} />)
            }
          </ul>
       </div>
      </div>
    );
  }
}

Campaign.propTypes = {
  campaigns:PropTypes.array.isRequired,
};
