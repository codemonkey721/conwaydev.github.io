'use strict';

const child = require('child_process');
const browserSync = require('browser-sync').create();

import gulp from 'gulp';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import svgSprite from 'gulp-svg-sprite';

const siteRoot = '_site';
const cssFiles = '_scss/**/*.scss';

gulp.task('jekyll', () => {
	const jekyll = child.spawn('jekyll', ['build',
		'--watch',
		'--incremental',
		'--drafts'
	]);

	const jekyllLogger = (buffer) => {
		buffer.toString()
			.split(/\n/)
			.forEach((message) => gutil.log('Jekyll: ' + message));
	};

	jekyll.stdout.on('data', jekyllLogger);
	jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('scss', ()=> {
	const processors = [
		autoprefixer({browsers: ['last 2 versions']}),
		cssnano(),
	];

	return gulp.src(cssFiles)
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(gulp.dest('./_includes/css'));
});

gulp.task('svg', () => {
	gulp.src('./assets/svg/*.svg')
		.pipe(svgSprite({
			shape: {
				dimension: {
					maxWidth : 40,
					maxHeight: 40
				},
				spacing : {
					padding: 10
				},
				dest: 'intermediate-svg'
			},
			mode : {
				symbol: true
			}
		}))
		.pipe(gulp.dest('./_includes/svg'));
});

gulp.task('webpack', () => {
	const webpack = child.exec('webpack --config webpack.production.config.js -p');

	const webpackLogger = (buffer) => {
		buffer.toString()
			.split(/\n/)
			.forEach((message) => gutil.log('Webpack: ' + message));
	};

	webpack.stdout.on('data', webpackLogger);
	webpack.stderr.on('data', webpackLogger);
});

gulp.task('serve', () => {
	browserSync.init({
		files: [siteRoot + '/**'],
		port: 4000,
		server: {
			baseDir: siteRoot
		}
	});

	gulp.watch('./_scss/**/*.scss', ['scss']);
	gulp.watch('./scripts/**/*.js', ['webpack']);
});

gulp.task('default', ['svg', 'scss', 'jekyll', 'serve']);
