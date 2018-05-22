const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
  'dist',
]

var cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'];

module.exports = {
  entry: {
    "app.bundle": './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: cssDev,
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true
    })
  ],
  devtool: 'source-map',
}