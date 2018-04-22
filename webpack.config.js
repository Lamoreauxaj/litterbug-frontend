const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const {
  __PROD__,
  __DEV__,
  builtPath,
  srcPath,
} = require('./environment');

const filter = arr => arr.filter(v => v);
const alias = {
  '/environment': path.resolve(__dirname, 'environment.js'),
};
fs.readdirSync(srcPath).forEach(name => {
  alias['/' + name] = path.resolve(srcPath, name);
});

process.traceDeprecation = true;

module.exports = {
  target: 'web',
  entry: filter([
    'babel-polyfill',
    __DEV__ && 'webpack-hot-middleware/client',
    srcPath,
  ]),
  resolve: {
    modules: [srcPath, path.resolve(__dirname, 'node_modules')],
    extensions: ['.jsx', '.js', '.scss'],
    alias,
  },
  output: {
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    path: builtPath,
    publicPath: './',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', include: srcPath },
      {
        test: /\.scss$/,
        use: filter([
          __DEV__ && 'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              importLoaders: 2,
              modules: true,
              localIdentName: '[local]__[hash:base64:5]',
              url: false,
            }
          },
          'postcss-loader',
          'sass-loader'
        ]),
        include: srcPath,
      }, {
        test: /\.css$/,
        use: filter([
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]),
        exclude: srcPath,
      },
    ],
  },
  optimization: {
    minimizer: [],
  },
  plugins: filter([
    new CleanWebpackPlugin([builtPath]),
    new CopyWebpackPlugin([{ from: path.resolve(srcPath, 'static'), to: builtPath }]),
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, 'template.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: __DEV__ ? '[name].css' : '[name].[contenthash].css' }),
    __PROD__ && new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    __DEV__ && new webpack.HotModuleReplacementPlugin(),
  ]),
  mode: __DEV__ ? 'development' : 'production',
};