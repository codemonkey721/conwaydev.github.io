const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
    entry: {
        index: './_scripts/modules/index.js'
    },
    output: {
        path: path.resolve(__dirname, './_includes/js'),
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?presets[]=es2015'
            }
        ]
    }
    ,
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;