import React, { Component, PropTypes } from 'react';
import CampaignItem from './CampaignItem';

export default class Campaign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addDisabled: true
    };
  }

  handleAddButtonClick() {
    const { onAddCampaign } = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddCampaign(title);
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

    const { campaigns, onRemoveCampaign } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2 className="titlePadding col-xs-12">Campaign</h2>
          </div>
          <ul>
            {
               campaigns.map( (campaigns, index) => <CampaignItem key={index} campaign={campaigns} onRemoveCampaign={onRemoveCampaign} />)
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
  onRemoveCampaign:PropTypes.func.isRequired
};

Campaign.defaultProps = {
  campaigns: []
};
