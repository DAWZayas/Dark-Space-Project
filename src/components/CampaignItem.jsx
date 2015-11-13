import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
            <Link to={"/select"} style={{color: 'inherit', textDecoration: 'inherit'}}><span className="col-xs-5">Mission {campaign.id}:  {campaign.title}</span></Link>
            <span className="col-xs-3">Status:  {(campaign.status === "success") ? <span className='glyphicon glyphicon-ok text-success'></span> : <span className='glyphicon glyphicon-remove text-danger'></span>}</span>
            <div className="col-xs-1"><Link to={`/selectEnemy/${campaign.id}`} style={{color: 'inherit', textDecoration: 'inherit'}}><span className={'glyphicon glyphicon-cog action-icon'}/></Link></div>
            <div className="col-xs-1"><span  onClick={(e) => this.handleRemoveButtonClick(e)} className={'glyphicon glyphicon-trash action-icon'}/></div>
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
