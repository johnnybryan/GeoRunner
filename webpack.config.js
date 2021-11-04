const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['regenerator-runtime/runtime.js', './client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') 
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/index.html',
  })],
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'), 
      publicPath: './build',
    },
  },
};