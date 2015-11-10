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
    const por = campaign.percentage;

    return (
        <div className="col-xs-12">
          <li className="list-group-item action-element  col-xs-12">
            <span className="col-xs-8">Mission {campaign.id}:  {campaign.title} {campaign.percentage}</span>
            <span className="col-xs-3">Status:  {(campaign.status === "success") ? <span className='glyphicon glyphicon-ok text-success'></span> : <span className='glyphicon glyphicon-remove text-danger'></span>}</span><span className="col-xs-1" onClick={(e) => this.handleRemoveButtonClick(e)} className={'pull-right glyphicon glyphicon-trash action-icon'}/>
            <div className="setPadding col-xs-12">
              <div className="progress">
                {(campaign.percentage >= 50) ? <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style={{width:campaign.percentage + "%"}}><span className="spanProgress">{campaign.percentage + "%"}</span></div>
                : <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style={{width:campaign.percentage + "%"}}><span className="spanProgress">{campaign.percentage + "%"}</span></div>}
              </div>
            </div>
          </li>
        </div>
    );
  }
}

CampaignItem.propTypes = {
  campaign: PropTypes.object.isRequired,
  onRemoveCampaign: PropTypes.func.isRequired
};
