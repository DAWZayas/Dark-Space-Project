import React, { Component, PropTypes } from 'react';

export default class ResultShipItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { resultShipProp } = this.props;
    return (
      <div>

  <strong>Name:</strong> {resultShipProp.name}
  <strong>Damage:</strong> {resultShipProp.damage}
  <strong>Agility:</strong> {resultShipProp.agility}
  <strong>Hull:</strong> {resultShipProp.hull}
  <strong>Shields:</strong> {resultShipProp.shields}
  <strong>Points:</strong> {resultShipProp.points}
      </div>
    );
  }
}

ResultShipItem.propTypes = {
  resultShipProp: PropTypes.object.isRequired
};
