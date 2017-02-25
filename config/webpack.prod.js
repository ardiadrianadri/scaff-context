var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var AotPlugin = require ('@ngtools/webpack').AotPlugin;
var path = require('path');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  entry: {
    'app': './src/main-aot.ts'
  },
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
    rules:[{
        enforce: 'post',
        test: /\.ts$/,
        loaders: ['@ngtools/webpack'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },{
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          minimize:true,
          caseSensitive:true
        }
      }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new AotPlugin({
      tsConfigPath: './tsconfig-aot.json',
      entryModule: path.resolve(process.cwd()) + '/src/app/app.module#AppModule',
      skipCodeGeneration: true
    })
  ]
});
