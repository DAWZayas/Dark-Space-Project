import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Points extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="userStyle">
        <div className="jumbotron">
          <div className="container">
            <div className="col-xs-8 col-sm-8">
              <h1>Dark Space Project</h1>
              <p>It is a strategy browser game, based on a universe of science fiction.</p>
              <p className="btn btn-primary btn-lg" role="button"><Link to="/tutorial" style={{color: 'inherit', textDecoration: 'inherit'}}>Start tutorial</Link></p>
            </div>
            <img src="http://vignette4.wikia.nocookie.net/disney/images/5/53/Death_Star_Render.png/revision/latest?cb=20131229205846" className="col-xs-4 col-sm-4" />
          </div>
        </div>
      </div>
    );
  }
}
