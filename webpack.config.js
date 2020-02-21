const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app2.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  mode: 'development',
  plugins: [
    new cleanPlugin.CleanWebpackPlugin()
  ]
};