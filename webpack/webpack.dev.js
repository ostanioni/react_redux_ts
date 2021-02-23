/* eslint-disable */
/* tslint:disabled */

/***_____IMPORTS______***/
const path    = require('path')
const webpack = require('webpack')
const { merge }   = require('webpack-merge')
const common  = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.clear()
console.log('dev-mode starting ...')

/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, '../')
const SRC = `${CONTEXT}/src`

/***___SOURCE_MAP____***/
const JS_SOURCE_MAP = {
  test: /\.js$/,
  enforce: 'pre',  
  use: [ 'source-map-loader' ],
}

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    host: '127.0.0.7',
    port: 3001
  },
  devtool: 'cheap-module-source-map', // 'source-map',
  module: {
    rules: [ JS_SOURCE_MAP ]
  },
  optimization: {
    minimize: false,
    usedExports: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${CONTEXT}/public/index.html`,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: false,
        useShortDoctype: true,        
        keepClosingSlash: true,
        minifyJS: false,
        minifyCSS: false,
        minifyURLs: false,
      }
    })],
});
