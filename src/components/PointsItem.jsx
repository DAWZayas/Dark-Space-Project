import React, { Component, PropTypes } from 'react';
import PointsPerMission from './PointsPerMission';

export default class PointsItem extends Component {

  constructor(props) {
    super(props);
}


  render() {

    const { point } = this.props;
    return (
      <div className="showlist">
        <div className="col-xs-12">
          <li className="list-group-item action-element  col-xs-12">
            <span className="col-xs-3">{point.name} </span>
            <span className="col-xs-3">Points: {point.userpoints} </span>
            <div className="pointsPerMission">
              <ul>
                {
                      point.missionpoints.map( (points, index) => <PointsPerMission key={index} point={points} />)
                }
              </ul>
          </div>
         </li>
        </div>
      </div>
    );
  }
}

PointsItem.propTypes = {
  point: PropTypes.object.isRequired
};

