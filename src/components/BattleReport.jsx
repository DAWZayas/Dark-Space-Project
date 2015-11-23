import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import clone from 'clone';
import battle from '../utils/functions';


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

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2 className="col-xs-12">Battle Report</h2>
          </div>
            <div className="col-xs-12">
              <div className="col-xs-4">
                <p className="btn btn-primary btn-md" role="button" onClick={e => this.handleSimulateButtonClick(e)}><Link to="/BattleResult" style={{color: 'inherit', textDecoration: 'inherit'}}>Simulate</Link></p>
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
