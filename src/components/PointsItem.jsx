import React, { Component, PropTypes } from 'react';
import PointsPerMission from './PointsPerMission';

export default class PointsItem extends Component {

  constructor(props) {
    super(props);
}

sumarray (array){
  let result = 0 ;
  for (let i = 0; i < array.length; i++ ){
    result += array[i];
  }
  return result;
}

  render() {

    const { point, onRemoveMissionPoints } = this.props;

    let total = this.sumarray(point.missionpoints);
    return (
      <div className="showlist">
        <div className="col-xs-12">
          <li className="list-group-item action-element  col-xs-12">
             <img src="image/nerdluck1.jpg" alt={event.title} class="img-responsive"/>
            <span className="col-xs-6">{point.name} </span>
            <span className="col-xs-6">Points: {total} </span>
            <div className="pointsPerMission">
              <ul className="col-xs-12">
                {
                      point.missionpoints.map( (pointinmission, index) => <PointsPerMission key={index} pointinmission={pointinmission} missionnumber={index} iduser={point.id} onRemoveMissionPoints={onRemoveMissionPoints} />)
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
  point: PropTypes.object.isRequired,
  onRemoveMissionPoints: PropTypes.func.isRequired
};

