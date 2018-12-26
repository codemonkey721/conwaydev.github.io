const path = require('path');

const config = {
    mode: 'production',
    entry: {
        index: './_scripts/modules/index.js'
    },
    output: {
        path: path.resolve(__dirname, './js'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /(node_modules)/,
            }
        ]
    },
};

module.exports = config;