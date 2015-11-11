import React, { Component, PropTypes } from 'react';

export default class SelectPlayerFleet extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2 className="col-xs-12">SelectPlayerFleet</h2>
          </div>
          <div className="panelPadding">
            <div className="panel panel-default col-xs-6">
              <div className="panel-body">
                Basic panel example
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

