'use strict';

const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uncss = require('postcss-uncss');
const svgSprite = require('gulp-svg-sprite');

gulp.task('scss', ()=> {
	return gulp.src('css/tailwind.css')
		.pipe(postcss([
            autoprefixer(),
            cssnano(),
            uncss({
                html: ['./_site/index.html', "./_site/blog/**/*.html"],
				ignore: ['.wf-active(.*)', '#twitter-widget-0']
			})
        ]))
		.pipe(gulp.dest('./_includes/css'));
});

gulp.task('svg', () => {
	gulp.src('./assets/svg/*.svg')
		.pipe(svgSprite({
			shape: {
				dimension: {
					maxWidth : 20,
					maxHeight: 20
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
