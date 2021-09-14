const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       globOptions: {
    //         ignore: ['**/index.html']
    //       }
    //     }
    //   ]
    // })
  ]
}

const mergeConfig = merge(commonConfig, prodConfig);
module.exports =  mergeConfig;