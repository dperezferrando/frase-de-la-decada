const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const _ = require("lodash");
const webpack = require("webpack");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const { envVars } = require('./setUpLocalEnv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const commonPlugins = [
  new HtmlWebpackPlugin({
    template: './server/index.html'
  }),
  new webpack.DefinePlugin(envVars),
  new MiniCssExtractPlugin({filename: '[name].css'})
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
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]  
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        }
      }
    }
  },
  plugins: commonPlugins,
  node: { fs: 'empty' },
};

const devConfig = {
  devtool: 'inline-source-map'
};

const prodConfig = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
      }
    }
  },
  devtool: "",
  plugins: commonPlugins.concat([new webpack.optimize.ModuleConcatenationPlugin(), new LodashModuleReplacementPlugin(), new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /es/)])//, new BundleAnalyzerPlugin()])
};

const configMap = {
  development: devConfig,
  test: devConfig,
  production: prodConfig
}


module.exports = () => {
  return _.merge({}, commonConfig, configMap[_.trim(process.env.NODE_ENV)]);
}
