import React, { Component, PropTypes } from 'react';

export default class CampaignItem extends Component {

  constructor(props) {
    super(props);

  }

  handleRemoveButtonClick(e) {
    e.stopPropagation();
    const { onRemoveCampaign} = this.props;
    onRemoveCampaign(this.id);
  }

  render() {

    const { key, id, tittle, status } = this.props;

    return (
      <div >
        <div className="col-lg-12">
         <li className="list-group-item action-element  col-lg-12">
            <span className="col-lg-5">{id}: Tittle:  {tittle}</span><span className="col-lg-7">Status:   {status}</span><span onClick={(e) => this.handleRemoveButtonClick(e)} className={'pull-right glyphicon glyphicon-trash action-icon'}/>
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
