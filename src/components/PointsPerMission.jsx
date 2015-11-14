import React, { Component, PropTypes } from 'react';

export default class PointsPerMission extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { point } = this.props;
    return (
            <li className="col-xs-12">
                  <span>  Mission:  {point}</span>
            </li>
    );
  }
}

PointsPerMission.propTypes = {
  point: PropTypes.number.isRequired
};
