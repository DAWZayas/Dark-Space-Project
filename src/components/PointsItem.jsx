import React, { Component, PropTypes } from 'react';
import PointsPerMission from './PointsPerMission';
export default class PointsItem extends Component {

  constructor(props) {
    super(props);
}

sumarray (array){
  let result = 0 ;
  for (let i = 0; i < array.length; i++ ){
    result = (result + array[i]);
  }
  return result;
}

  render() {

    const { point, onRemoveMissionPoints, auth } = this.props;

    let total = this.sumarray(point.missionpoints);
    if (point.avatar === '') point.avatar = 'http://vignette4.wikia.nocookie.net/disney/images/5/53/Death_Star_Render.png/revision/latest?cb=20131229205846';
    return (
      <div className="showlist">
        <div className="col-xs-12">
          <li className="list-group-item action-element  col-xs-12">
          <div className="marginBottom">
            <span className="col-xs-6"><img className="avatar" src={point.avatar}/> {point.name}</span>
            <span className="col-xs-6">Total Points: {total} </span>
          </div>
            <div className="pointsPerMission">
              <ul className="col-xs-12">
                {
                      point.missionpoints.map( (pointinmission, index) => <PointsPerMission key={index} pointinmission={pointinmission} missionnumber={index} iduser={point.id} onRemoveMissionPoints={onRemoveMissionPoints} auth={auth}/>)
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

