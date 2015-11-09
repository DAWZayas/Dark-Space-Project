import React, { Component, PropTypes } from 'react';

export default class CampaignItem extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const { key, id, tittle, status } = this.props;

    return (
      <div className="row">
        <div className="col-lg-6">
         <li className='list-group-item action-element'>
            <span>{id}: Tittle:  {tittle} Status:   {status}</span>
         </li>
        </div>
      </div>
    );
  }
}

CampaignItem.propTypes = {
  key: PropTypes.number,
  tittle: PropTypes.string,
  id: PropTypes.number,
  status: PropTypes.string,
};
