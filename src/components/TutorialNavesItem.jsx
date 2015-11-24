import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TutorialNavesItem extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { navesProp } = this.props;

    return (
      <div className="col-xs-12">
        <p className="well col-xs-12">
          <span className="col-xs-12"><strong>Name:</strong> {navesProp.name}</span>
          <span className="col-xs-12"><strong>Damage:</strong> {navesProp.damage}</span>
          <span className="col-xs-12"><strong>Agility:</strong> {navesProp.agility}</span>
          <span className="col-xs-12"><strong>Hull:</strong>{navesProp.hull}</span>
          <span className="col-xs-12"><strong>Shields:</strong> {navesProp.shields}</span>
          <span className="col-xs-12"><strong>Points:</strong> {navesProp.points}</span>
        </p>
      </div>
    );
  }
}

TutorialNavesItem.propTypes = {
  navesProp: PropTypes.object.isRequired
};
