import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="userStyle">
       <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>
            <ul className="nav navbar-nav">
              <li className="col-xs-3"><Link to="/">Home</Link></li>
              <li className="col-xs-3"><Link to="/campaign">Campaing</Link></li>
              <li className="col-xs-2"><Link to="/points">Points</Link></li>
              <li><Link to="/battle">Battle</Link></li>
              <li className="col-xs-2"><Link to="/tutorial">Tutorial</Link></li>
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
