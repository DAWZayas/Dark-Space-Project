import React, { Component, PropTypes } from 'react';
import CampaignItem from './CampaignItem';

export default class Campaign extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { campaigns } = this.props;

    return (
      <div>
        <h1>Campaign</h1>
        {
        campaigns.map ((campaign) => <CampaignItem key={campaign.id} id={campaign.id} tittle={campaign.tittle} />)
        }
      </div>
    );
  }
}

Campaign.propTypes = {
  campaigns: PropTypes.array.isRequired,
};
