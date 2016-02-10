import React, { Component, PropTypes } from 'react';
import CampaignItem from './CampaignItem';
import Spinner from './Spinner';

export default class Campaign extends Component {

  constructor(props) {
    super(props);
    this.state = {
      addDisabled: true,
      loading: true
    };
  }

  componentWillReceiveProps(nextProps) {
       this.setState({ loading: false});
  }

  componentWillMount() {
    this.props.registerListeners(this.props.params);
  }

  handleAddButtonClick() {
    const { onAddCampaign, onAddPoint} = this.props;
    const node = this.refs.title;
    const title =  node.value.trim();
    onAddCampaign(this.props.campaigns.length, title);
    onAddPoint(this.props.campaigns.length, this.props.users.length);
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

  admin(firebase, iduser){
    let admin = 'falsed';
    firebase.child(`points/${iduser}/admin`).once('value', snapshot =>
     admin = snapshot.val()
    );
    return admin;
  }


  render() {

    const { campaigns, points, onRemoveCampaign, onRemoveMissionForPoints, auth, firebase} = this.props;
    const {missionpoints} = points.missionpoints;
    this.admin(firebase, auth.id);
    let i = 0;
    let user = '';
    campaigns.map( function(campaign, index){
      if ( points.missionpoints[index] * 100 / 500 >= 50 ){
        i++;
      }
        (points.id === auth.id) ? user = (points.name) : null;
    });
let id = '';
let x = 0;
    while (x < points.length){
      (auth.id === points[x].id) ? id = points[x].name : null;
      x++;
    }
    return (
        <div className="row">
        { auth.authenticated ?
          <div>
          <div className="col-xs-12">
            <div className="titlePadding">
              <h2>Campaign</h2><h4>user: <span className="connect">{user}</span></h4>
            </div>
            { (this.state.loading) ? <Spinner /> :
            <ul>
              {
                 campaigns.map( (campaign, index) => <CampaignItem key={index} id={index} campaign={campaign} points={points.missionpoints[index]} onRemoveCampaign={onRemoveCampaign} onRemoveMissionForPoints={onRemoveMissionForPoints} lastMissionCompleted={i - 1} admin={ (this.admin(firebase, auth.id)) }/>)
              }
            </ul>
          }
          </div>
          { (this.admin(firebase, auth.id)) ?
          <div className="col-xs-12">
             <div className="input-group">
                <input type="text" className="form-control" placeholder="Add Misssion" ref="title" onKeyDown={e => this.handleOnTitleKeyDown(e)} onChange={e => this.handleOnChangeTitle(e)}/>
                 <span className="input-group-btn">
                  <button  disabled={this.state.addDisabled} className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-ok-sign" /></button>
                </span>
            </div>
          </div>
          : '' }
          </div>
        :
            <div className="col-xs-12">
              <div className="titlePadding">
                  <h2>Error, please identify yourself</h2>
              </div>
            </div>
         }
        </div>
    );
  }
}


Campaign.propTypes = {
  campaigns:PropTypes.array,
  points: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  firebase: PropTypes.object.isRequired,
  onRemoveCampaign:PropTypes.func.isRequired,
  onAddCampaign: PropTypes.func.isRequired,
  onAddPoint: PropTypes.func.isRequired,
  //onRemoveMissionForPoints: PropTypes.func.isRequired
};

Campaign.defaultProps = {
  campaigns: []
};

