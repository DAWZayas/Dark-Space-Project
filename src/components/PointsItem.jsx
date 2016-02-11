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
    let coincident = false;
    let total = this.sumarray(point.missionpoints);
     (point.avatar === '') ? point.avatar = 'http://vignette4.wikia.nocookie.net/disney/images/5/53/Death_Star_Render.png/revision/latest?cb=20131229205846' : false;
     (point.id === auth.id ) ? coincident = true : false;
    return (
       <div className="showlist">
        <div className="col-xs-12">
           <li  className={ coincident === true ? "userconnect list-group-item action-element  col-xs-12" : "list-group-item action-element  col-xs-12" }>
          <div className="marginBottom">
            <span className="col-md-1 col-xs-3"><img className="avatar" src={point.avatar}/></span>
            <span className="col-md-3 col-xs-9">{ (coincident === true) ? <span className="connect">{point.name}</span> : <span>{point.name} </span>}</span>
            <span className="col-xs-3"/>
            <span className="col-md-5 col-xs-9">Total Points: {total} </span>
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

