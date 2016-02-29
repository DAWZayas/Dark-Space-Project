import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import clone from 'clone';
import battle from '../utils/functions';
import SelectShipItem from './SelectShipItem';


export default class Points extends Component {

  constructor(props) {
    super(props);
  }

  handleSimulateButtonClick(e){
    const { playerSpaceFleet, enemySpaceFleet, onChangePlayerSpaceFleetAfterFight, onChangeEnemySpaceFleetAfterFight } = this.props;
    const playerSpace = clone(playerSpaceFleet);
    const enemySpace = clone(enemySpaceFleet);
    battle(playerSpace, enemySpace, onChangePlayerSpaceFleetAfterFight, onChangeEnemySpaceFleetAfterFight);
  }

  render() {
    const { playerSpaceFleet, enemySpaceFleet } = this.props;
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2>Battle Report</h2>
          </div>
          <div className="col-xs-12">
            {
              playerSpaceFleet.map( (ship, index) => <SelectShipItem key={index} resultShipProp={ship}/>)
            }
          </div>
          <div className="titlePadding">
            <h2>Versus</h2>
          </div>
          <div className="col-xs-12">
            {
              enemySpaceFleet.map( (ship, index) => <SelectShipItem key={index} resultShipProp={ship}/>)
            }
          </div>
            <div className="col-xs-12">
              <div className="col-xs-4">
                <Link to={`/battleResult/${this.props.params.idCampaign}`} onClick={e => this.handleSimulateButtonClick(e)} style={{color: 'inherit', textDecoration: 'inherit'}}><p className="btn btn-primary btn-md" role="button" >Simulate</p></Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

Points.PropTypes = {
  playerSpaceFleet: PropTypes.array.isRequired,
  enemySpaceFleet: PropTypes.array.isRequired,
  onChangePlayerSpaceFleetAfterFight: PropTypes.func.isRequired,
  onChangeEnemySpaceFleetAfterFight: PropTypes.func.isRequired

};
