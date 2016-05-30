var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
var minify = require('gulp-clean-css');
var plumber = require('gulp-plumber');
var cp = require('child_process');

gulp.task('jekyll-build', function (done) {
    return cp.spawn('jekyll' , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('sass', function(){
    return gulp.src('_sass/main.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'))
        .pipe(plumber())
});

gulp.task('watch', function () {
    gulp.watch(['*.scss', 'css/*.scss', '_sass/**/*.scss'], ['sass', 'jekyll-rebuild']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
