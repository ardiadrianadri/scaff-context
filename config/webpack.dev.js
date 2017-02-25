var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loaders: [{
        loader: 'awesome-typescript-loader',
        options: { configFileName: helpers.root('tsconfig.json') }
      }, 'angular2-template-loader']
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  plugins: [
     new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
});
