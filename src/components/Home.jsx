import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Points extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="jumbotron">
				<div className="container">
				<h1>Dark Space Project</h1>
					<p>It is a strategy browser game, based on a universe of science fiction.</p>
					<p className="btn btn-primary btn-lg" role="button"><Link className="linkButton" to="/tutorial">Start tutorial</Link></p>
				</div>
			</div>
    );
  }
}
