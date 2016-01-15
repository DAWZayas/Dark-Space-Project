import { connect } from 'react-redux';

import Tutorial from '../components/Tutorial';
import * as tutorialActions from '../actions/tutorial';

export default connect(
  state => ({naves: state.naves}),
  tutorialActions
)(Tutorial);

