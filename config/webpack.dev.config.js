import webpack from 'webpack';
import WriteFilePlugin from 'write-file-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import paths from './paths';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    // In this boilerplate, we only enable the popup script for demo
    // You can still create your own background or content scripts under src folder
    // Then, add following config to entry
    // background: paths.backgroundSrc,
    // content: paths.contentSrc
    popup: paths.popupSrc
  },
  output: {
    path: paths.devBuild,
    pathinfo: true,
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js?$/,
      exclude: /node_modules/,
      include: [paths.source],
      loader: 'eslint-loader'
    }, {
      test: /\.js?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
      include: [paths.source]
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: [paths.source]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.popupHtml,
      filename: 'popup.html',
      excludeChunks: ['content', 'background']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new WriteFilePlugin({
      test: /\.bundle(\.js|\.js\.map)$|\.html$/
    }),
    new CopyWebpackPlugin([
      { from: paths.extension }
    ])
  ]
};
