import React, { Component, PropTypes } from 'react';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.registerListeners(this.props.params, this.props.auth.id);
  }

  componentWillUnmount(){
    this.props.reed(this.props.auth.id);
  }


  render() {
    const {auth, notifications} = this.props;
    return (
      (auth.authenticated) ?
      <div className="row">
        <div className="titlePadding">
              <h2>Notifications</h2>
        </div>
        <div  className="col-md-12">
          <div className="col-md-12">
            {
                notifications.map( (notify) => (!notify.status) ? <div className="alert alert-info col-md-3 notify">{notify.message}</div> : <div className="alert alert-success">{notify.message}</div>)
            }
        </div>
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
  reed: PropTypes.func.isRequired
};
