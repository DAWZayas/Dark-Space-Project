import React, { Component, PropTypes } from 'react';

export default class PointsPerMission extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { point } = this.props;
    return (
            <li className="list-group-item action-element  col-xs-12">
                  <span className="col-xs-3">  Mission:  {point}</span>
            </li>
    );
  }
}

PointsPerMission.propTypes = {
  point: PropTypes.number.isRequired
};
