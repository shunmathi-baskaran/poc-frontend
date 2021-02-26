const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:4040/'
    },
    devServer: {
        port: 4040,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                transaction: 'transaction@http://localhost:4041/remoteEntry.js',
                customerAccInfo: 'customerAccInfo@http://localhost:4042/remoteEntry.js',
                login: 'login@http://localhost:4043/remoteEntry.js'
            },
            //shared: packageJSON.dependencies
            shared: ['react', 'react-dom', 'react-redux']
        }),
    ]
}

module.exports = merge(commonConfig, devConfig)