import React, { Component, PropTypes } from 'react';
import CampaignItem from './CampaignItem';

export default class Campaign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addDisabled: true
    };
  }

  componentWillMount() {
    this.props.registerListeners(this.props.params);
  }

  handleAddButtonClick() {
    const { onAddCampaign, onAddPoint} = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddCampaign(this.props.campaigns.length, title);
    onAddPoint();
    node.value = '';
    this.setState({
      addDisabled: true
    });
  }

  handleOnChangeTitle() {
    const node = this.refs.title;
    const title =  node.value.trim();
    this.setState({
      addDisabled: title.length === 0
    });
  }

  handleOnTitleKeyDown(event) {
    const ENTER_KEY = 13;
    if (event.keyCode === ENTER_KEY && !this.state.addDisabled) {
      this.handleAddButtonClick();
    }
  }


  render() {

    const { campaigns, points, onRemoveCampaign, onRemoveMissionForPoints} = this.props;
    const {missionpoints} = points.missionpoints;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2>Campaign</h2>
          </div>
          <ul>
            {
               campaigns.map( (campaign, index) => <CampaignItem key={index} campaign={campaign} points={points.missionpoints[index]} onRemoveCampaign={onRemoveCampaign} onRemoveMissionForPoints={onRemoveMissionForPoints}/>)
            }
          </ul>
        </div>
        <div className="col-xs-12">
           <div className="input-group">
              <input type="text" className="form-control" placeholder="Pull Title" ref="title" onKeyDown={e => this.handleOnTitleKeyDown(e)} onChange={e => this.handleOnChangeTitle(e)}/>
              <span className="input-group-btn">
                <button  disabled={this.state.addDisabled} className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-ok-sign" /></button>
              </span>
          </div>
        </div>
      </div>
    );
  }
}


Campaign.propTypes = {
  campaigns:PropTypes.array,
  points: PropTypes.object.isRequired,
  onRemoveCampaign:PropTypes.func.isRequired,
  onAddCampaign: PropTypes.func.isRequired,
  onAddPoint: PropTypes.func.isRequired,
  onRemoveMissionForPoints: PropTypes.func.isRequired
};

Campaign.defaultProps = {
  campaigns: []
};

