import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class shipPlayerAfterfight extends Component {

  constructor(props) {
    super(props);

  }


  render() {

    const { ship } = this.props;

    return (
      <div>

      </div>
    );
  }
}

shipPlayerAfterfight.propTypes = {
  ship: PropTypes.object.isRequired
};
