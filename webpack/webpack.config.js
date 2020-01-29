const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const _ = require("lodash");
const webpack = require("webpack");
const { envVars } = require('./setUpLocalEnv');

const commomPlugins = [
  new HtmlWebpackPlugin({
    template: './server/index.html'
  })
];

const commonConfig = {
  entry: "./client/app.jsx",
  output: {
    path: path.join(__dirname, '/../public'),
    filename: "[name].js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]  
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: commomPlugins,
  node: { fs: 'empty' },
};

const devConfig = {
  devtool: 'inline-source-map',
  plugins: commomPlugins.concat(new webpack.DefinePlugin(envVars))
};

const prodConfig = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  }
};

const configMap = {
  development: devConfig,
  test: devConfig,
  production: prodConfig
}


module.exports = () => {
  return _.merge({}, commonConfig, configMap[process.env.NODE_ENV]);
}
