/* eslint-disable */
/* tslint:disabled */

/***_____IMPORTS______***/
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

console.clear()
console.log('\x1b[0m\x1b[42m\x1b[30m%s\x1b[0m', 'dev-mode starting ...')

/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, '../')
const SRC = `${CONTEXT}/src`

/***___BABEL_LOADER___ ***/
const BABEL = {
  test: /\.m?jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
}
/***___TSX_LOADER___***/
const TSX = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    // disable type checker - we will use it in fork plugin
    transpileOnly: true,
    // getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
    getCustomTransformers: path.join(__dirname, './webpack.ts-transformers.js')

  }
}
/*________PLUGIN_OPTIONS_____________*/
const htmlPluginOptions = {
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
    minifyURLs: false
  }
}
const forkTsPluginOptions = {
  // eslint: {
  //  files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
  // },
  typescript: {
    diagnosticOptions: {
      semantic: true,
      syntactic: true
    }
  }
}

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    server: 'http',
    bonjour: false,
    compress: false,
    allowedHosts: 'all',
    historyApiFallback: true,
    // contentBase: './dist',
    hot: true,
    host: '127.0.0.7',
    port: 3001,
    open: true,
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
      reconnect: true,
    },
  },
  devtool: 'cheap-module-source-map', // 'source-map',
  module: {
    rules: [TSX, BABEL]
  },
  optimization: {
    minimize: false,
    usedExports: true
  },
  plugins: [
    new HtmlWebpackPlugin(htmlPluginOptions),
    new ForkTsCheckerWebpackPlugin(forkTsPluginOptions)
  ]
})
