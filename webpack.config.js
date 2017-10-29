const path = require('path');

module.exports = {
    entry: {
        index: './src/render/index.js',
        login: './src/render/login.js'
    },

    output: {
        path: path.join(__dirname, '/public'),
        filename: '[name].bundle.js'
    },

    devServer: {
        inline: true,
        port: 3000,
        contentBase: path.join(__dirname, '/public/')
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};