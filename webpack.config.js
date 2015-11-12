'use strict';

let webpack = require('webpack');
let friendlyFormatter = require('eslint-friendly-formatter');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [ 'react-hot', 'babel?optional[]=runtime', 'eslint' ]
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer?browsers=last 2 versions'
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000' }]
  },
  eslint: {
    formatter: friendlyFormatter,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    })
  ]
};