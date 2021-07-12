const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackStrip = require('strip-loader');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: WebpackStrip.loader('console.log')
            }
        }
    ]
}
});