import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Dark Space Project App</h1>
          <div className="row">
            <div className="col-lg-1">
              <Link to="/">Hide</Link>
            </div>
          </div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node
};
