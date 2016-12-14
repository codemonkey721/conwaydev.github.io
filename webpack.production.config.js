require('babel-core/register');
const webpack = require('webpack');
const config = require('./webpack.config');

module.exports = Object.assign({}, config, {
	devtool: '',
	output: {
		filename: './_includes/js/script.min.js'
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/), // Only include en locale with moment
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				sequences: true,
				dead_code: true,
				drop_debugger: true,
				comparisons: true,
				conditionals: true,
				evaluate: true,
				booleans: true,
				loops: true,
				unused: true,
				hoist_funs: true,
				if_return: true,
				join_vars: true,
				cascade: true,
				drop_console: false
			},
			output: {
				comments: false
			}
		}),
		// // This makes webpack error out if a build fails
		// // @see https://github.com/webpack/webpack/issues/708
		function() {
			this.plugin('done', function(stats) {
				if (stats.compilation.errors && stats.compilation.errors.length &&
					process.argv.indexOf('--watch') == -1) {
					stats.compilation.errors.forEach((error)=> console.log(error.message));
					process.exit(1);
				}
			});
		}
	]
});
