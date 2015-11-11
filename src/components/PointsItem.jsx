import React, { Component, PropTypes } from 'react';

export default class PointsItem extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { points } = this.props;

    return (
        <div className="col-xs-12">
          <li className="list-group-item action-element  col-xs-12">
            <span className="col-xs-8">User: {points.name} </span>
            <span className="col-xs-3">Points: {points.userpoints} </span>
          </li>
        </div>
    );
  }
}

PointsItem.propTypes = {
  points: PropTypes.object.isRequired
};
