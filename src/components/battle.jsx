import React, { Component, PropTypes } from 'react';
import { battle } from '../utils/battle_final_proebas.js';
import { Link } from 'react-router';
export default class Battle extends Component {

    constructor(props) {
    super(props);
  }
   handleAddButtonClick() {

    const { playerft, enemyplayerft, navpoints} = this.props;


    console.log(battle(playerft, enemyplayerft, navpoints, 2));
  }
  render() {

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2 className="titlePadding col-xs-12">Batalla</h2>
            <span className="input-group-btn">
                <button  className="btn btn-info" type="button" onClick={e => this.handleAddButtonClick(e)}><span className="glyphicon glyphicon-ok-sign" />batalla</button>
              </span>
          </div>
        </div>
      </div>
    );
  }
}

