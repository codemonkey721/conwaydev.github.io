var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var uncss = require('gulp-uncss');
var cp = require('child_process');

gulp.task('sass', function(){
    return gulp.src('_sass/main.scss')
        .pipe(sass())
        .pipe(prefix('last 3 versions'))
        .pipe(minify())
        .pipe(gulp.dest('_site/css'))
        .pipe(gulp.dest('_includes'))
        .pipe(plumber())
});

gulp.task('default', ['sass']);
