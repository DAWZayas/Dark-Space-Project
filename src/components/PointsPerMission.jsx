import React, { Component, PropTypes } from 'react';

export default class PointsPerMission extends Component {

  constructor(props) {
    super(props);
  }


handleRemoveMissionPoints (e, iduser, missionnumber) {
    e.stopPropagation();
    const { onRemoveMissionPoints} = this.props;
    onRemoveMissionPoints(iduser, missionnumber);
  }

  calculatePercentage(points){
      return points * 100 / 500;
  }

  render() {

    const {pointinmission, iduser, missionnumber} = this.props;

    return (
            <li className="setPadding col-xs-12 stylenone">
                  <span className="col-xs-8">  Mission {missionnumber + 1}:  {pointinmission} points</span>
                  <span className="col-xs-4 glyphicon glyphicon-remove-circle text-danger" onClick= {(e) => this.handleRemoveMissionPoints(e, iduser,  missionnumber)}></span>
                   <div className="col-xs-12 progress">
                      {(this.calculatePercentage(pointinmission) >= 50) ? <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style={{width:this.calculatePercentage(pointinmission) + "%"}}><span className="spanProgress">{this.calculatePercentage(pointinmission) + "%"}</span></div>
                       : <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style={{width:this.calculatePercentage(pointinmission) + "%"}}><span className="spanProgress">{this.calculatePercentage(pointinmission) + "%"}</span></div>}
                    </div>

            </li>
    );
  }
}

PointsPerMission.propTypes = {
  pointinmission: PropTypes.number.isRequired,
  onRemoveMissionPoints: PropTypes.func.isRequired,
  iduser: PropTypes.number.isRequired,
  missionnumber: PropTypes.number.isRequired,
};
