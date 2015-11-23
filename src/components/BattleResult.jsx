import React, { Component, PropTypes } from 'react';
import ResultShipItem from './ResultShipItem';

export default class BattleResult extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { playerFleetAfterFight, enemyPlayerFleetAfterFight } = this.props;
    return (
              <div className="col-xs-12">
                <div className="result">
                  <h3 className="col-xs-12">Victory || Defeat</h3>
                </div>
                <div className="col-xs-12">
                  <p className="col-xs-12">
                    {
                      playerFleetAfterFight.map( (ship, index) => <ResultShipItem key={index} resultShipProp={ship}/>)
                    }
                  </p>
                  <p className="col-xs-12">
                    {
                      enemyPlayerFleetAfterFight.map( (ship, index) => <ResultShipItem key={index} resultShipProp={ship}/>)
                    }
                  </p>
                </div>
              </div>
    );
  }
}

BattleResult.propTypes = {
  playerFleetAfterFight: PropTypes.array.isRequired,
  enemyPlayerFleetAfterFight: PropTypes.array.isRequired
};
