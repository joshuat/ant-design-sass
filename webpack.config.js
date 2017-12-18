const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const functions = require('./public/css/postcss.functions');

module.exports = {
  entry: [
    './src/index.js',
    './public/css/main.scss'
  ],
  output: {
    path: __dirname,
    publicPath: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1'
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require('postcss-functions')({ functions })
                ];
              }
            }
          }, 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.sass', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: 'public'
  }
};
