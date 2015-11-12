import React, { Component, PropTypes } from 'react';
import PointsItem from './PointsItem';

export default class Points extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { points } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2 className="col-xs-12">Points</h2>
          </div>
        <ul>
            {
               points.map( (points, index) => <PointsItem key={index} point={points} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

Points.PropTypes = {
  points: PropTypes.array.isRequired
};

Points.defaultProps = {
  points: []
};

