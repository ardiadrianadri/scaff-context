var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var aotLoader = require ('@ultimate/aot-loader');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['@ultimate/aot-loader']
      },
      {
        test: /\.html$/,
        loaders: ['raw-loader','html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loaders: ['raw-loader','file-loader?name=assets/[name].[hash].[ext]']
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'css-loader?sourceMap'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new aotLoader.AotPlugin({
      tsConfig:'./tsconfig.json',
      entryModule: './src/app/app.module#AppModule'
    })
  ]
});
