import React, { Component, PropTypes } from 'react';
import PointsItem from './PointsItem';

export default class Points extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { points, onRemoveMissionPoints } = this.props;
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2>Points</h2>
          </div>
        <ul>
            {
               points.map( (points, index, percentage) => <PointsItem key={index} point={points} onRemoveMissionPoints={onRemoveMissionPoints}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

Points.PropTypes = {
  points: PropTypes.array.isRequired,
  onRemoveMissionPoints: PropTypes.func.isRequired
};

Points.defaultProps = {
  points: []
};
