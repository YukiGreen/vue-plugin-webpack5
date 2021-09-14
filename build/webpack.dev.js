const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  devServer: {
    hot: true,
    hotOnly: true,
    port: 4000,
    open: false,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    }
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
}

const mergeConfig = merge(commonConfig, devConfig);

module.exports = mergeConfig;