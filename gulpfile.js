'use strict';

// Global Configs ============================================================
const isDev = (process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development';
const isProd = !isDev;
const paths = {
    root: './',
    src: './src/',
    build: './wwwroot/'
};

const libsBasePath = './node_modules/';

var gulp = require('gulp');
var sass = require('gulp-sass');

var cssConfig = {
    src: paths.src + '/scss/*.*/*.scss',
    dest: paths.build + 'assets/css'
};

gulp.task('convert-sass', function () {
    return gulp.src(cssConfig.src)
        .pipe(sass())
        .pipe(cssConfig.dest);
});

gulp.task('watch', function () {
    //css changes
    gulp.watch(cssConfig.src, ['convert-sass'] );
});

