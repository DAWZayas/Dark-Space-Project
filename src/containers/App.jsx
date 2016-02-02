
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth/';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: true,
      collapsed: false
    };
  }

handlerSetState(nav){
  this.setState({
    current: nav,
    collapsed: false
  });
}

  handleSignOutClick(){
    this.handlerSetState('/sign-out');
     this.props.signOut();
  }

handlerCollapsed(stateCollapsed){
     if (stateCollapsed !== true){
        this.setState({
          collapsed: true,
        });
    }else {
      this.setState({
          collapsed: false,
        });
    }
}


  render() {
    const { auth } = this.props;
    const { children } = this.props;
    return (
      <div className="userStyle">
       <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={() => this.handlerCollapsed(this.state.collapsed)} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="active" to="/"><span className="navbar-brand" onClick={() => this.handlerSetState('/') }>Dark Space Project</span></Link>
            </div>
            <div className= { (this.state.collapsed === true) ? "collapse navbar-collapse in" : "collapse navbar-collapse" } id="bs-example-navbar-collapse-1" >
            <ul className="nav navbar-nav">
              { (this.state.current === '/campaign') ? <li className="active"><Link to="/campaign" onClick={() => this.handlerSetState('/campaign') }>Campaign</Link></li> : <li><Link to="/campaign" onClick={() => this.handlerSetState('/campaign') }>Campaign</Link></li> }
              { (this.state.current === '/points') ? <li className="active"><Link to="/points" onClick={() => this.handlerSetState('/points') }>Points</Link></li> : <li><Link to="/points" onClick={() => this.handlerSetState('/points') }>Points</Link></li> }
              { (this.state.current === '/tutorial') ? <li className="active"><Link to="/tutorial" onClick={() => this.handlerSetState('/tutorial') }>Tutorial</Link></li> : <li><Link to="/tutorial" onClick={() => this.handlerSetState('/tutorial') }>Tutorial</Link></li> }
                { auth.authenticated ?
                <li className="navbar-btn"><button className="btn" type="button" onClick={ () => this.handleSignOutClick() }>Sign Out</button></li> :
                <li><Link to="/sign-in" onClick={ ()=> this.handlerSetState('/sign-in') } { ...this.props }>Sign In</Link></li>
              }
            </ul>
          </div>
        </div>
        </nav>
      {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React RouterConfirmDialog
  children: PropTypes.node,
  signOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}


export default connect(
  state => ({
    auth: state.auth
}),   Object.assign( {}, authActions))(App);
