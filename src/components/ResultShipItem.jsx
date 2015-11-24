import React, { Component, PropTypes } from 'react';

export default class ResultShipItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { resultShipProp } = this.props;
    return (
      <div className={(resultShipProp.hull <= 0 ) ? "col-xs-6 dead" : "col-xs-6 alive" }>
      <ul className="noMargin">
        <li><strong>Name:</strong> {resultShipProp.name}</li>
        <li><strong>Damage:</strong> {resultShipProp.damage}</li>
        <li><strong>Agility:</strong> {resultShipProp.agility}</li>
        <li><strong>Hull:</strong> {resultShipProp.hull}</li>
        <li><strong>Shields:</strong> {resultShipProp.shields}</li>
        <li><strong>Points:</strong> {resultShipProp.points}</li>
      </ul>
      </div>
    );
  }
}

ResultShipItem.propTypes = {
  resultShipProp: PropTypes.object.isRequired
};
