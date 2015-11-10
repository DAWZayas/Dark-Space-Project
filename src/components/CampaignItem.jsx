import React, { Component, PropTypes } from 'react';

export default class CampaignItem extends Component {

  constructor(props) {
    super(props);

  }

  handleRemoveButtonClick(e) {
    e.stopPropagation();
    const { onRemoveCampaign, campaign} = this.props;
    onRemoveCampaign(campaign.id);
  }

  render() {

    const { campaign } = this.props;

    return (
        <div className="col-lg-12">
         <li className="list-group-item action-element  col-lg-12">
            <span className="col-lg-5">{campaign.id}: Title:  {campaign.title}</span><span className="col-lg-7">Status:   {(campaign.status === "success") ? <span className='glyphicon glyphicon-ok text-success'></span> : <span className='glyphicon glyphicon-remove text-danger'></span>}</span><span onClick={(e) => this.handleRemoveButtonClick(e)} className={'pull-right glyphicon glyphicon-trash action-icon'}/>
         </li>
        </div>
    );
  }
}

CampaignItem.propTypes = {
  campaign: PropTypes.object.isRequired,
  onRemoveCampaign: PropTypes.func.isRequired
};
