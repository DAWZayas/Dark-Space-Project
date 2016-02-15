import React, { Component, PropTypes } from 'react';
//import { Link } from 'react-router';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { total, pending } = this.props;
    return (
      <div>
        Notifications <span className={(total === 0) ? "badge" : (pending !== 0) ? "badge pending" : "badge notpending"}>{total === 0 ? 0 : `${pending}/${total}`}</span>
      </div>
    );
  }
}

Notifications.propTypes = {
  total: PropTypes.number.isRequired,
  pending: PropTypes.number.isRequired
};

Notifications.defaultProps = {
  total: 0,
  pending: 0
};
