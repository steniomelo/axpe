const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    resolve(__dirname, '../src/javascripts/app.jsx')
  ],
  mode: 'production',
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  resolve(__dirname, '../src/styles'),
                  resolve(__dirname, '../node_modules')
                ]
              }
            },
            { loader: 'postcss-loader' }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      config: JSON.stringify(require(`./${process.env.NODE_ENV}.json`))
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: '../src/index.html',
      filename: 'index.html'
    })
  ]
};
