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

  render() {

    const {pointinmission, iduser, missionnumber} = this.props;

    return (
            <li className="col-xs-12 stylenone">
                  <span className="col-xs-3">  Mission {missionnumber + 1}:  {pointinmission} </span><span className="col-xs-3 glyphicon glyphicon-remove-circle" onClick= {(e) => this.handleRemoveMissionPoints(e, iduser,  missionnumber)}></span>
            </li>
    );
  }
}

PointsPerMission.propTypes = {
  pointinmission: PropTypes.number.isRequired,
  onRemoveMissionPoints: PropTypes.func.isRequired,
  iduser: PropTypes.number.isRequired,
  missionnumber: PropTypes.number.isRequired
};
