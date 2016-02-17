import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

import init from './utils/init';

require('./style.css');
require('bootstrap/dist/css/bootstrap.min.css');
global. jQuery = require('jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.min.js');
require('alertifyjs/build/css/alertify.min.css');
require('alertifyjs/build/css/themes/default.min.css');

const store = init();

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
