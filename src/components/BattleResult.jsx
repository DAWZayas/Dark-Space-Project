import React, { Component, PropTypes } from 'react';
import ResultShipItem from './ResultShipItem';

export default class BattleResult extends Component {

  constructor(props) {
    super(props);
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

  calculatePercentage(){
    return  this.calculatePoints() * 500 / this.totalpoints();
  }

  render() {
    const { playerFleetAfterFight, enemyPlayerFleetAfterFight } = this.props;
    return (
              <div className="col-xs-12">
                <div className="result">
                  <h3 className="col-xs-12">{(this.calculatePercentage() <= 50) ? "Defeat" : "Victory" }</h3>
                </div>
                <div className="col-xs-12">
                  <div className="col-xs-12">
                  <p>Player Fleet</p>
                    {
                      playerFleetAfterFight.map( (ship, index) => <ResultShipItem key={index} resultShipProp={ship}/>)
                    }
                    </div>
                    <div className="col-xs-12">
                    <p>Enemy Fleet</p>
                    {
                      enemyPlayerFleetAfterFight.map( (ship, index) => <ResultShipItem key={index} resultShipProp={ship}/>)
                    }
                    </div>
                </div>
              </div>
    );
  }
}

BattleResult.propTypes = {
  playerFleetAfterFight: PropTypes.array.isRequired,
  enemyPlayerFleetAfterFight: PropTypes.array.isRequired
};
