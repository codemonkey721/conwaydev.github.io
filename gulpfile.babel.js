'use strict';

import autoprefixer from 'autoprefixer';
import child from 'child_process';
import cssnano from 'cssnano';
import gulp from 'gulp';
import gutil from 'gulp-util';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import svgSprite from 'gulp-svg-sprite';

const browserSync = require('browser-sync').create();

const cssDir = './scss/**/*.scss';

gulp.task('jekyll', ['sass'], () => {
    const jekyll = child.spawn('jekyll', ['build']);

    const jekyllLogger = (buffer) => {
        buffer.toString()
            .split(/\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
    };

    jekyll.stdout.on('data', jekyllLogger);
    jekyll.stderr.on('data', jekyllLogger);
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

gulp.task('sass', () => {
    const processors = [
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano(),
    ];

    return gulp.src(cssDir)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./_includes/css'))
        .pipe(browserSync.stream());
});


// Static server
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: {
            baseDir: '_site'
        }
    });
    gulp.watch('./**/*.html').on('change', ['jekyll']);
});

gulp.task('default', ['svg', 'sass', 'jekyll', 'serve']);
