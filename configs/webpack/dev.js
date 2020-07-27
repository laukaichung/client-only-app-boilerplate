// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');
const path = require("path");

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8081',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './client/index.tsx' // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server
    port: 8081,
    disableHostCheck: true,
    // https://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router
    historyApiFallback: true,
    // Make the devServer to read the static folder "/dist"
    // Remember to compile your sass files to ./dist folder using the filter watcher by Webstorm.
    contentBase: path.join(__dirname, '../../dist'),
    compress: true,
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
});
