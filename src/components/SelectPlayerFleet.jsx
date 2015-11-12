import React, { Component, PropTypes } from 'react';

export default class SelectPlayerFleet extends Component {

  constructor(props) {
    super(props);
this.state = {
     points:0
    };
  }

  handleOnSelectChangePoints() {

    const { campaignState, playerFleetState, enemyPlayerFleetState, navesState, pointsState } = this.props;

    const xWingsNumber = this.refs.Xwing.options.selectedIndex;
    const yWingsNumber = this.refs.Ywing.options.selectedIndex;
    const bWingsNumber = this.refs.Bwing.options.selectedIndex;
    const xWing = navesState[0];
    const yWing = navesState[1];
    const bWing = navesState[2];

    let totalPoints = (xWing.points * xWingsNumber) + (yWing.points * yWingsNumber) + (bWing.points * bWingsNumber);

    this.setState({
      points : totalPoints
    });

    console.log(xWing);
    console.log(totalPoints);
    console.log(this.state);

    }


  render() {

    const { campaignState, playerFleetState, enemyPlayerFleetState, navesState, pointsState } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2 className="col-xs-12">SelectPlayerFleet</h2>
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">Points</span>
            <input type="text" className="form-control" value={this.state.points} ref="pointsValue" />
          </div>

          <div className="input-group input-group-xs">
            <span className="input-group-addon">X - Wings</span>
              <select className="form-control" ref="Xwing" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">Y - Wings</span>
              <select className="form-control" ref="Ywing" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">B - Wings</span>
              <select className="form-control" ref="Bwing" onChange={e => this.handleOnSelectChangePoints(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
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
  pointsState:PropTypes.array.isRequired
};
