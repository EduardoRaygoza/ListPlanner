const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app2.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  mode: 'production',
  devtool: '',
  plugins: [
    new cleanPlugin.CleanWebpackPlugin()
  ]
};