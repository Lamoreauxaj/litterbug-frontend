const path = require('path');

const {
  NODE_ENV = 'production',

  HTTP_PORT = '8080',
  PROXY_PORT = '3000',
} = process.env;

const __PROD__ = NODE_ENV === 'production';
const __DEV__ = !__PROD__;

const httpPort = parseInt(HTTP_PORT);
const proxyPort = parseInt(PROXY_PORT);

const builtPath = path.resolve(__dirname, 'built');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  __PROD__,
  __DEV__,
  httpPort,
  proxyPort,
  builtPath,
  srcPath,
};