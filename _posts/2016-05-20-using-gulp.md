---
layout: post
title:  "Using Gulp in a Jekyll Project"
date:   2016-05-20 21:50:24 -0600
categories: blog
---

Even though I’m trying not to rely on JS build systems as much anymore and rather use plain npm scripts, I have to say I still love them. They absolutely changed my life when I started using them. Today I'm going to talk about using Gulp inside of Jekyll. Now Jekyll has a really useful server inside itself, but I prefer being able to control a little more and gulp gives me that ability.

#### What is gulp?

![gulp](/assets/img/gulp.png)

From https://github.com/gulpjs/gulp it is described as:

* Automation - gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.
* Platform-agnostic - Integrations are built into all major IDEs and people are using gulp with PHP, .NET, Node.js, Java, and other platforms.
* Strong Ecosystem - Use npm modules to do anything you want + over 2000 curated plugins for streaming file transformations
* Simple - By providing only a minimal API surface, gulp is easy to learn and simple to use

I like to use gulp to compile and concatenate my assets, but there is so much you can do with it. The first thing you’re going to want to do is create your package.json file. I find the easiest way is to `npm init`. Once you’ve generated that you can go ahead and start installing our dependencies we’re going to need.

```
npm install gulp gulp-sass browser-sync gulp-autoprefixer gulp-plumber --save-dev
```

Then you're going to create a file called `gulpfile.js` and paste this code in there.

```
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

```

You can see that what we’re doing is instead of letting `jekyll serve` handle the SCSS we are just compiling it ourselves then running `jekyll rebuild`. So once you have your `gulpfile.js` filled with this all you need to do is run `gulp` and it will automatically spin up a live server and minify your SCSS. Neat!