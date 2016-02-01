import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import routes from '../routes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
<<<<<<< HEAD
          <ReduxRouter>
            {routes(store)}
          </ReduxRouter>
=======
        <ReduxRouter >
        {routes(store)}
        </ReduxRouter>
>>>>>>> f321aaaffda3fb6a5244bdd2ca0cc5bff8c12b42
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
