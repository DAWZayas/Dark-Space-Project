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
        <div className="noMargin well well-lg">
            <div className="row">
              <div className="col-xs-7">
                <div><strong>Name:</strong> {navesProp.name}</div>
                <div><strong>Damage:</strong> {navesProp.damage}</div>
                <div><strong>Agility:</strong> {navesProp.agility}</div>
                <div><strong>Hull:</strong>{navesProp.hull}</div>
                <div><strong>Shields:</strong> {navesProp.shields}</div>
                <div><strong>Points:</strong> {navesProp.points}</div>
              </div>
              <div className="col-xs-5">
                <img src={navesProp.img} className="pull-right"/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}


TutorialNavesItem.propTypes = {
  navesProp: PropTypes.object.isRequired
};
