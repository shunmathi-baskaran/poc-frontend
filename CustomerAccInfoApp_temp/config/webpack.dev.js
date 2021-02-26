const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json')

const devConfig = {
    mode:'development',
    output:{
        publicPath: 'http://localhost:4042/'
    },
    devServer:{
        port: 4042,
        historyApiFallback:{
            index:'index.html'
        }
    },
        plugins:[
            new ModuleFederationPlugin({
                name: 'customerAccInfo',
                filename: 'remoteEntry.js',
                exposes: {
                    './CustomerAccInfoApp': './src/Root'
                },
                //shared: packageJson.dependencies
                shared: ['react', 'react-dom', 'react-redux']
            })
        ]
    }


module.exports = merge(commonConfig, devConfig);