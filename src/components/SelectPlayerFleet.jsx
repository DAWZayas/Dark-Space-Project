import React, { Component, PropTypes } from 'react';
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

    const cruiseNumber = this.refs.cruise.options.selectedIndex;
    const destroyerNumber = this.refs.destroyer.options.selectedIndex;
    const fighterNumber = this.refs.fighter.options.selectedIndex;
    const cruise = navesState[0];
    const destroyer = navesState[1];
    const fighter = navesState[2];

    let totalPoints = (cruise.points * cruiseNumber) + (destroyer.points * destroyerNumber) + (fighter.points * fighterNumber);
    let playerSpaceFleetArray = [];
    let i = 0;
    for (let j = 0; j < cruiseNumber; j++) {
      playerSpaceFleetArray[i] = cruise;
      i++;
    }
    for (let j = 0; j < destroyerNumber; j++) {
      playerSpaceFleetArray[i] = destroyer;
      i++;
    }
    for (let j = 0; j < fighterNumber; j++) {
      playerSpaceFleetArray[i] = fighter;
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

    const cruiseNumber = this.refs.cruise.options.selectedIndex;
    const destroyerNumber = this.refs.destroyer.options.selectedIndex;
    const fighterNumber = this.refs.fighter.options.selectedIndex;
    const cruise = navesState[0];
    const destroyer = navesState[1];
    const fighter = navesState[2];

    let totalPoints = (cruise.points * cruiseNumber) + (destroyer.points * destroyerNumber) + (fighter.points * fighterNumber);
    let playerSpaceFleetArray = [];
    let i = 0;
    for (let j = 0; j < cruiseNumber; j++) {
      playerSpaceFleetArray[i] = cruise;
      i++;
    }
    for (let j = 0; j < destroyerNumber; j++) {
      playerSpaceFleetArray[i] = destroyer;
      i++;
    }
    for (let j = 0; j < fighterNumber; j++) {
      playerSpaceFleetArray[i] = fighter;
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
            <h2 className="col-xs-12">SelectPlayerFleet </h2>
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">Total points</span>
            <input type="text" className="form-control" value={this.state.points} ref="pointsValue" />
          </div>

          <div className="input-group input-group-xs">
            <span className="input-group-addon">cruise (30 Puntos)</span>
              <select className="form-control" ref="cruise" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">destroyer (21 Puntos)</span>
              <select className="form-control" ref="destroyer" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">fighter (8 Puntos)</span>
              <select className="form-control" ref="fighter" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
          <div className="alertPadding">
            <div className={`${!this.state.pointsAlert ? 'hidden' : "alert alert-danger  col-xs-11" }`} role="alert"><strong>Oppps!</strong> "Please value of your fleet can't exceed 100 points"</div>
          </div>
          <div className="col-xs-12">
            <div className="col-xs-2"></div>
            <div className="col-xs-4">
              <p className="btn btn-primary btn-md" role="button"><Link to="/campaign" style={{color: 'inherit', textDecoration: 'inherit'}}>Back</Link></p>
            </div>
            <div className="col-xs-4">
              <p className="btn btn-primary btn-md" disabled={this.state.addDisabled} role="button" onClick={e => this.handleAddButtonClick(e)}><Link to="/battleReport" style={{color: 'inherit', textDecoration: 'inherit'}}>Fight</Link></p>
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
