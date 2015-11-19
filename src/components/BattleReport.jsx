import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import battle from '../utils/functions';
import { battleareturnstatus } from '../utils/battle_final_proebas.js';

export default class Points extends Component {

  constructor(props) {
    super(props);
    this.state = {
      victoryPoints : 0,
      BattleDisabled : true
    };
  }

  handleSimulateButtonClick(e){
    const {navpointss, playerSpaceFleet, enemySpaceFleet, onChangePlayerSpaceFleetAfterFight, onChangeEnemySpaceFleetAfterFight } = this.props;
    battleareturnstatus(playerSpaceFleet, enemySpaceFleet, navpointss, onChangePlayerSpaceFleetAfterFight, onChangeEnemySpaceFleetAfterFight);
    this.setState({
      victoryPoints : 100,
      BattleDisabled : false
    });
  }

  render() {

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2 className="col-xs-12">Battle Report</h2>
          </div>
          {(this.state.BattleDisabled) ? (
            <div className="col-xs-12">
              <div className="col-xs-4">
                <p className="btn btn-primary btn-md" role="button" onClick={e => this.handleSimulateButtonClick(e)}>Simulate</p>
              </div>
            </div>)
          :
              (<div className="col-xs-12">
                <div className="result">
                  <h3 className="col-xs-12">Victory || Defeat</h3>
                </div>
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">Victory Points</span>
                  <input type="text" className="form-control" value={this.state.victoryPoints} ref="victoryPoints" />
                </div>
                <div className="col-xs-12">
                  <p className="well col-xs-12">
                  </p>
                </div>
              </div>
              )}
        </div>
      </div>
    );
  }
}

Points.PropTypes = {
  playerSpaceFleet: PropTypes.array.isRequired,
  enemySpaceFleet: PropTypes.array.isRequired
};
