import React, { Component, PropTypes } from 'react';
import PointsItem from './PointsItem';

export default class Points extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { points } = this.props;

    return (
      <div className="titlePadding">
        <h2 className="col-xs-12">Points</h2>
        <ul>
            {
               points.map( (points, index) => <PointsItem key={index} point={points.userpoints} />)
            }
            <li>Prueba</li>
          </ul>
      </div>
    );
  }
}


Points.defaultProps = {
  points: []
};

