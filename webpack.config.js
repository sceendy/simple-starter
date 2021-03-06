const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';

module.exports = {
  entry: './src/js/index',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '/dist')
  },
  devtool: env === 'prod' ? false : 'source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    inline: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Simple Starter',
      inject: 'body',
      template: path.join(__dirname, '/src/index.html')
    }),
    new webpack.ProgressPlugin()
  ]
}