import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="navbar-brand">Dark Space Project</span>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/campaign">Campaing</Link></li>
              <li><Link to="/points">Points</Link></li>
              <li><Link to="/tutorial">Tutorial</Link></li>
            </ul>
          </div>
        </nav>
      {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};
