require('babel-core/register');
var path = require('path');

module.exports = {
	entry: {
		bundle: './_scripts/modules/index.js',
	},
	output: {
		filename: './_includes/js/script.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
		]
	},
};
