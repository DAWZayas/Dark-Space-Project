import React, { Component, PropTypes } from 'react';
import clone from 'clone';
import { Link } from 'react-router';

export default class SelectPlayerFleet extends Component {

  constructor(props) {
    super(props);
this.state = {
     points: 0,
     playerSpaceFleet : [],
     pointsAlert : false,
     addDisabled: true
    };
  }

  handleOnSelectChangePoints() {

    const { navesState } = this.props;

    const xWingNumber = this.refs.Xwing.options.selectedIndex;
    const yWingNumber = this.refs.Ywing.options.selectedIndex;
    const bWingNumber = this.refs.Bwing.options.selectedIndex;
    const xWing = clone(navesState[0]);
    const yWing = clone(navesState[1]);
    const bWing = clone(navesState[2]);

    let totalPoints = (xWing.points * xWingNumber) + (yWing.points * yWingNumber) + (bWing.points * bWingNumber);
    let playerSpaceFleetArray = [];
    let i = 0;
    for (let j = 0; j < xWingNumber; j++) {
      playerSpaceFleetArray[i] = xWing;
      i++;
    }
    for (let j = 0; j < yWingNumber; j++) {
      playerSpaceFleetArray[i] = yWing;
      i++;
    }
    for (let j = 0; j < bWingNumber; j++) {
      playerSpaceFleetArray[i] = bWing;
      i++;
    }

    this.setState({
      points : totalPoints,
      playerSpaceFleet : playerSpaceFleetArray,
      pointsAlert : totalPoints > 100 ? true : false,
      addDisabled: playerSpaceFleetArray.length === 0 || totalPoints > 100 ? true : false
    });
  }

  handleAddButtonClick(e) {
    e.stopPropagation();
    const { navesState, campaignState, onPrepareToFight, onChangeEnemyFleet} = this.props;
    const idCampaign = this.props.params.idCampaign;

    const xWingNumber = this.refs.Xwing.options.selectedIndex;
    const yWingNumber = this.refs.Ywing.options.selectedIndex;
    const bWingNumber = this.refs.Bwing.options.selectedIndex;
    const xWing = clone(navesState[0]);
    const yWing = clone(navesState[1]);
    const bWing = clone(navesState[2]);

    let totalPoints = (xWing.points * xWingNumber) + (yWing.points * yWingNumber) + (bWing.points * bWingNumber);
    let playerSpaceFleetArray = [];
    let i = 0;
    for (let j = 0; j < xWingNumber; j++) {
      playerSpaceFleetArray[i] = xWing;
      i++;
    }
    for (let j = 0; j < yWingNumber; j++) {
      playerSpaceFleetArray[i] = yWing;
      i++;
    }
    for (let j = 0; j < bWingNumber; j++) {
      playerSpaceFleetArray[i] = bWing;
      i++;
    }

    onPrepareToFight(playerSpaceFleetArray);
    onChangeEnemyFleet(campaignState[idCampaign - 1].playerFleet);

  }

  render() {

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2>Select the player fleet</h2>
          </div>
          <div className="titlePadding">
            <h4 className="col-xs-6 col-md-2 roundh text-center">Points {this.state.points} of 100</h4>
          </div>
          <div className="col-xs-12"></div>

          <div className="input-group input-group-xs">
            <span className="input-group-addon">X - Wings (21 points)</span>
              <select className="form-control" ref="Xwing" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">Y - Wings (20 poitns)</span>
              <select className="form-control" ref="Ywing" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">B - Wings (21 points)</span>
              <select className="form-control" ref="Bwing" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
          </div>
          <div className="alertPadding">
            <div className={`${!this.state.pointsAlert ? 'hidden' : "alert alert-danger  col-xs-11" }`} role="alert"><strong>Oppps!</strong> "Please value of your fleet can't exceed 100 points"</div>
          </div>
          <div className="col-xs-12">
            <div className="col-xs-2"></div>
            <div className="col-xs-4">
              <Link to="/campaign" style={{color: 'inherit', textDecoration: 'inherit'}}><p className="btn btn-primary btn-md" role="button">Back</p></Link>
            </div>
            <div className="col-xs-4">
            { this.state.addDisabled ? <p className="btn btn-primary btn-md" disabled={this.state.addDisabled} role="button"> Fight</p>
            :
            <Link to={`/battleReport/${this.props.params.idCampaign}`} onClick={e => this.handleAddButtonClick(e)} style={{color: 'inherit', textDecoration: 'inherit'}}><p className="btn btn-primary btn-md" disabled={this.state.addDisabled} role="button" >Fight</p></Link>
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SelectPlayerFleet.propTypes = {
  campaignState:PropTypes.array.isRequired,
  playerFleetState:PropTypes.array.isRequired,
  enemyPlayerFleetState:PropTypes.array.isRequired,
  navesState:PropTypes.array.isRequired,
  pointsState:PropTypes.array.isRequired,
  onPrepareToFight: PropTypes.func.isRequired,
  onChangeEnemyFleet:PropTypes.func.isRequired
};

