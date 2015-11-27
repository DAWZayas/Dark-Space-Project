import React, { Component, PropTypes } from 'react';

export default class SelectShipItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { resultShipProp } = this.props;
    return (
      <div className="col-xs-12 col-sm-6">
        <div className="well well-lg">
          <div className="row">
            <div className="col-xs-6">
              <div><strong>Name:</strong> {resultShipProp.name}</div>
              <div><strong>Damage:</strong> {resultShipProp.damage}</div>
              <div><strong>Agidivty:</strong> {resultShipProp.agidivty}</div>
              <div><strong>Hull:</strong> {resultShipProp.hull}</div>
              <div><strong>Shields:</strong> {resultShipProp.shields}</div>
              <div><strong>Points:</strong> {resultShipProp.points}</div>
            </div>
            <div className="col-xs-5">
              <img src={resultShipProp.img} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SelectShipItem.propTypes = {
  resultShipProp: PropTypes.object.isRequired
};
