import React, { Component, PropTypes } from 'react';

export default class PointsPerMission extends Component {

  constructor(props) {
    super(props);
  }

  handleRemoveMissionPoints(e, id, pos) {
    e.stopPropagation();
    const { onRemoveMissionPoints} = this.props;
    onRemoveMissionPoints(id, (pos - 1));
  }

  render() {

    const { pos, points, id} = this.props;

    return (
            <li className="col-xs-12 stylenone">
                  <span className="col-xs-3">  Mission { pos }:  {points[id].missionpoints[pos - 1]}</span><span className="col-xs-3 glyphicon glyphicon-remove-circle" onClick= {(e) => this.handleRemoveMissionPoints(e, id,  pos)}></span>
            </li>
    );
  }
}

PointsPerMission.propTypes = {
  points: PropTypes.array.isRequired,
  onRemoveMissionPoints: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  pos: PropTypes.number.isRequired
};
