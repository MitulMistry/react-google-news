const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
        options: {
          url: false
        }
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }]
  }
});
