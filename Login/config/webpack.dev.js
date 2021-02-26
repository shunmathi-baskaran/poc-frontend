const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:4043/',
  },
  devServer: {
    port: 4043,
    historyApiFallback: {
      index: 'index.html',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'login',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginApp': './src/App',
      },
     // shared: packageJson.dependencies,
     shared: ['react', 'react-dom', 'react-redux']
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
