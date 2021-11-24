/* eslint-disable */
/* tslint:disabled */

const path = require('path')
// const webpack = require('webpack')

// typescript-plugin-styled-components
// const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
// const styledComponentsTransformer = createStyledComponentsTransformer();

/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, '../')
const SRC = path.resolve(__dirname, '../src')
const ASSET_PATH = process.env.ASSET_PATH || '/'
/* __________ENTRY__POINT_____________*/
const $ENTRY = './src/index.ts'

module.exports = {
  context: CONTEXT,
  entry: {
    app: $ENTRY
  },
  output: {
    filename: '[contenthash].js',
    path: `${CONTEXT}/dist`,
    publicPath: ASSET_PATH
  },
  module: {
    rules: []
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      store:       `${SRC}/store`,
      slices:      `${SRC}/store/slices`,
      pages:       `${SRC}/pages`,
      layouts:     `${SRC}/layouts`,
      components:  `${SRC}/components`,
      resources:   `${SRC}/resources`,
      tables:      `${SRC}/tables`,
      styled:      `${SRC}/styled`,
      ts:          `${SRC}/typescript`,
      theme:       `${SRC}/theme`,
      algs:        `${SRC}/typescript/algorithms`,
      webgl:       `${SRC}/webgl`,
      polyfills:   `${SRC}/polyfills`,
      resources:   `${CONTEXT}/public/resources`,
      workers:     `${CONTEXT}/public/workers`,
      css:         `${CONTEXT}/public/css`,
      imgs:        `${CONTEXT}/public/imgs`,
    }
  }
}
