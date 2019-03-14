const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const CleanPluginConfig = new CleanWebpackPlugin();

var banner = process.env.npm_package_name + ' - ' + process.env.npm_package_version + ' | ' +
    '(c)' + new Date().getFullYear() + '  ' + process.env.npm_package_author_name + ' | ' +
    process.env.npm_package_license + ' | ' +
    process.env.npm_package_homepage;

module.exports = merge(baseConfig, {
  entry: './src/main.js',
  mode: 'production',
  optimization: {
    usedExports: true,
  },
  output: {
    filename: 'shared-state-hook.min.js',
    chunkFilename: '[name].[id].chunk.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    libraryTarget: 'this'
  },
  externals: {
    react: 'React', // Case matters here
    'react-dom': 'ReactDOM' // Case matters here
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 300000,
    maxAssetSize: 300000
  },
    devtool: false,
    plugins: [CleanPluginConfig,new webpack.BannerPlugin(banner)]
});
