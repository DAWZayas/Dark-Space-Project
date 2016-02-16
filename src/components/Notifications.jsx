import React, { Component, PropTypes } from 'react';
import Spinner from './Spinner';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps(nextProps) {
       this.setState({ loading: false});
  }

  componentWillMount() {
    this.props.registerListeners(this.props.params, this.props.auth.id);
  }

  componentWillUnmount(){
    this.props.reed(this.props.auth.id);
  }

  removenotify(key){
    this.props.remove(this.props.auth.id, key);
  }

  clearAll(){
    this.props.clear(this.props.auth.id);
  }


  render() {
    const {auth, notifications} = this.props;
    return (
    (this.state.loading) ? <Spinner /> :
      (auth.authenticated) ?
      <div className="row">
        <div className="titlePadding">
              <h2>Notifications</h2>
        </div>
        <div  className="col-md-12">
        {(notifications[0]) ?
          <div className="col-md-12">
            {
                notifications.map( (notify) => (notify.status) ? <div className="alert alert-info col-md-3 notify">{notify.message} <span onClick={ () => this.removenotify(notify.key)} className="glyphicon glyphicon-remove right"></span></div> : <div className="alert alert-success col-md-3 notify">{notify.message} <span onClick={ () => this.removenotify(notify.key)} className="glyphicon glyphicon-remove right"></span></div>).reverse()
            }
            <div className="col-md-12">
            <button onClick={ () => this.clearAll()} className="btn btn-danger">Clear all</button>
            </div>
        </div>
        : <div className="col-md-12"><h4 className="col-md-12">No Notifications</h4></div>}
        </div>
      </div> :
      <div className="col-xs-12">
              <div className="titlePadding">
                  <h2>Error, please identify yourself</h2>
              </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  auth: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  registerListeners: PropTypes.func.isRequired,
  reed: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};
