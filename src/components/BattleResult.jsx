import React, { Component, PropTypes } from 'react';
import ResultShipItem from './ResultShipItem';
import { Link } from 'react-router';

export default class BattleResult extends Component {

  constructor(props) {
    super(props);
  }

  handleBackButtonClick(){
    const idCampaign = this.props.params.idCampaign;
    const {onBattleResult} = this.props;
    onBattleResult(idCampaign);
  }

  calculatePoints(){
    const {enemyPlayerFleetAfterFight} = this.props;
    let result = 0;
    for (let i = 0; i < enemyPlayerFleetAfterFight.length; i++){
      if (enemyPlayerFleetAfterFight[i].hull <= 0) {
        result = result + enemyPlayerFleetAfterFight[i].points;
      }
    }
    return result;
  }

  totalpoints(){
        const {enemyPlayerFleetAfterFight} = this.props;
    let result = 0;
    for (let i = 0; i < enemyPlayerFleetAfterFight.length; i++){
        result = result + enemyPlayerFleetAfterFight[i].points;
    }
    return result;
  }

pointsfor500(){
    return this.calculatePoints() * 500 / this.totalpoints();
  }

  calculatePercentage(){
    return  this.calculatePoints() * 500 / this.totalpoints();
  }

  render() {
    const { playerFleetAfterFight, enemyPlayerFleetAfterFight } = this.props;
    return (
              <div className="col-xs-12">
                <div className="result">
                  <h1 className="col-xs-12">{(this.calculatePercentage() <= 50) ? "Defeat" : "Victory" }</h1>
                  <h3 className="col-xs-12">{this.pointsfor500()} points of 500 points</h3>
                </div>
                <div className="col-xs-12">
                  <h3>Player Fleet:</h3>
                  {
                    playerFleetAfterFight.map( (ship, index) => <ResultShipItem key={index} resultShipProp={ship}/>)
                  }
                </div>
                <div className="col-xs-12">
                  <h3>Enemy Fleet:</h3>
                  {
                     enemyPlayerFleetAfterFight.map( (ship, index) => <ResultShipItem key={index} resultShipProp={ship}/>)
                  }
                </div>
                <div className="col-xs-4">
                  <p className="btn btn-primary btn-md" role="button" onClick={() => this.handleBackButtonClick()}><Link to="/campaign" style={{color: 'inherit', textDecoration: 'inherit'}}>Back</Link></p>
                </div>
              </div>
    );
  }
}

BattleResult.propTypes = {
  playerFleetAfterFight: PropTypes.array.isRequired,
  enemyPlayerFleetAfterFight: PropTypes.array.isRequired,
  onBattleResult: PropTypes.func.isRequired
};
