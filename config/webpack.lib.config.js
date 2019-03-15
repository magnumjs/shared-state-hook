const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const CleanPluginConfig = new CleanWebpackPlugin();


module.exports = merge(baseConfig, {
    entry: './src/main.js',
    mode: 'none',
    optimization: {
        usedExports: true,
    },
    output: {
        filename: 'main.js',
        chunkFilename: '[name].[id].chunk.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        react: 'react', // Case matters here
        'react-dom': 'react-dom' // Case matters here
    },
    performance: {
        hints: 'warning',
        maxEntrypointSize: 300000,
        maxAssetSize: 300000
    },
    devtool: false,
    plugins: [CleanPluginConfig]
});