import React, { Component, PropTypes } from 'react';

export default class SelectPlayerFleet extends Component {

  constructor(props) {
    super(props);
this.state = {
      points: 0
    };
  }

  handleOnSelectChange() {
    const xWingsPoints = this.refs.Xwing.options.selectedIndex;
    const yWingsPoints = this.refs.Ywing.options.selectedIndex;
    const bWingsPoints = this.refs.Bwing.options.selectedIndex;
    this.state.points = xWingsPoints + yWingsPoints + bWingsPoints;
    console.log(this.state.points);
  }

  render() {

    const { campaignState, playerFleetState, enemyPlayerFleetState, navesState, pointsState } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2 className="col-xs-12">SelectPlayerFleet</h2>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">X - Wings</span>
              <select className="form-control" ref="Xwing" onChange={e => this.handleOnSelectChange(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">Y - Wings</span>
              <select className="form-control" ref="Ywing" onChange={e => this.handleOnSelectChange(e)}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
          </div>
          <div className="input-group input-group-xs">
            <span className="input-group-addon">B - Wings</span>
              <select className="form-control" ref="Bwing" onChange={e => this.handleOnSelectChange(e)}>
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
