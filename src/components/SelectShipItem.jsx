import React, { Component, PropTypes } from 'react';

export default class SelectShipItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { resultShipProp } = this.props;
    return (
      <div className="col-xs-6">
        <div className="well well-lg">
          <ul>
            <li><strong>Name:</strong> {resultShipProp.name}</li>
            <li><strong>Damage:</strong> {resultShipProp.damage}</li>
            <li><strong>Agility:</strong> {resultShipProp.agility}</li>
            <li><strong>Hull:</strong> {resultShipProp.hull}</li>
            <li><strong>Shields:</strong> {resultShipProp.shields}</li>
            <li><strong>Points:</strong> {resultShipProp.points}</li>
          </ul>
        </div>
      </div>
    );
  }
}

SelectShipItem.propTypes = {
  resultShipProp: PropTypes.object.isRequired
};
