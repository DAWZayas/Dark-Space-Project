import React, { Component, PropTypes } from 'react';

export default class PointsPerMission extends Component {

  constructor(props) {
    super(props);
  }

handleRemoveMissionPoints(e, id, pos) {
    e.stopPropagation();
    const { onRemoveMissionPoints} = this.props;
    onRemoveMissionPoints(id, (pos-1));
  }

  render() {

    const { pos, point, id} = this.props;

    return (
            <li className="col-xs-12 stylenone">
                  <span className="col-xs-3">  Mission { pos }:  {point}</span><span className="col-xs-3 glyphicon glyphicon-remove-circle" onClick= {(e) => this.handleRemoveMissionPoints(e, id,  pos)}></span>
            </li>
    );
  }
}

PointsPerMission.propTypes = {
  point: PropTypes.number.isRequired,
  onRemoveMissionPoints: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  pos: PropTypes.number.isRequired
};
