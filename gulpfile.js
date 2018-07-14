'use strict';

const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const gutil = require('gulp-util');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const svgSprite = require('gulp-svg-sprite');

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

gulp.task('serve', () => {
	browserSync.init({
		files: [siteRoot + '/**'],
		port: 4000,
		server: {
			baseDir: siteRoot
		}
	});

	gulp.watch('./_scss/**/*.scss', ['scss']);
});

gulp.task('default', ['svg', 'scss']);
