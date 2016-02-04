import React, { Component, PropTypes } from 'react';
import PointsItem from './PointsItem';
import Spinner from './Spinner';

export default class Points extends Component {

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
    this.props.registerListeners(this.props.params);
  }

  render() {

    const { points, onRemoveMissionPoints, auth} = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2>Points</h2>
          </div>
          { (this.state.loading) ? <Spinner /> :
        <ul>
            {
               points.map( (points, index, percentage) => <PointsItem key={index} point={points} onRemoveMissionPoints={onRemoveMissionPoints} auth={auth}/>)
            }
          </ul>
        }
        </div>
      </div>
      );
  }
}

Points.PropTypes = {
  points: PropTypes.array.isRequired,
  onRemoveMissionPoints: PropTypes.func.isRequired
};

Points.defaultProps = {
  points: []
};
