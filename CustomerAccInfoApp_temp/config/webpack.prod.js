const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json')

const prodConfig = {
    mode: 'production',
    output:{
        filename: '[name].[contenthash].js',
        //publicPath: '/marketing/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'customeraccinfo',
            filename: 'remoteEntry.js',
            exposes: {
                './CustomerAccInfoApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);