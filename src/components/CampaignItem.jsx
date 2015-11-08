import React, { Component, PropTypes } from 'react';

export default class CampaignItem extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { key, id, tittle } = this.props;

    return (
      <div>
        <span>{id}{tittle}</span>
      </div>
    );
  }
}

CampaignItem.propTypes = {
  key: PropTypes.number,
  tittle: PropTypes.string,
  id: PropTypes.number,
};
