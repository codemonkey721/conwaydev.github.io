'use strict';

const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const svgSprite = require('gulp-svg-sprite');

const siteRoot = '_site';
const cssFiles = '_scss/**/*.scss';

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

gulp.task('default', ['svg', 'scss']);
