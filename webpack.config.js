const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    path.resolve('./example/app.js')
  ],
  output: {
    path: path.resolve('./example'),
    pathinfo: true,
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: [
      path.resolve('./src')
    ],
    extensions: ['.js', '']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(path.resolve('./node_modules'))
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};