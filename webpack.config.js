const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
module.exports = {
  mode: "development",
  entry: './src/app.js', 
  devtool: 'inline-source-map', 
  devServer: {
    client: {
      overlay: true,
    },
    static: './dist',
    host: 'local-ipv4', 
    port: '8000',
    // open: true,
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant', 
      template: path.resolve(__dirname, '/src/index.html'),
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), 
    clean: true,
  }, 
};