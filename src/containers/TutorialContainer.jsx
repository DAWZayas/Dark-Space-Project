import { connect } from 'react-redux';

import Tutorial from '../components/Tutorial';


function mapStateToProps(state) {
  return {
    naves: state.naves
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Tutorial);

