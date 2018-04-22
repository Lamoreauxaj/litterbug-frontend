const compression = require('compression');
const history = require('connect-history-api-fallback');
const express = require('express');
const app = express();

const {
  __PROD__,
  __DEV__,
  srcPath,
  builtPath,
} = require('./environment');

let frontend = null;
if (__DEV__) {
  const path = require('path');
  const webpack = require('webpack');
  const webpackDev = require('webpack-dev-middleware');
  const webpackHot = require('webpack-hot-middleware');

  const webpackConfig = require('./webpack.config.js');

  const compiler = webpack(webpackConfig);
  frontend = express();

  frontend.use(express.static(path.resolve(srcPath, 'static')));
  frontend.use(webpackDev(compiler, {
    stats: {
      cached: false,
      colors: true
    },
  }));
  frontend.use(webpackHot(compiler));
} else {
  frontend = express.static(builtPath);
}
app.use(history());
app.use(compression());
app.use(frontend);

module.exports = app;