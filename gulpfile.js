const { src, dest, series, parallel } = require('gulp');
const options = require("./package.json").options; //Options : paths and other options from package.json
const postcss = require('gulp-postcss'); //For Compiling tailwind utilities with tailwind config
const concat = require('gulp-concat'); //For Concatinating js,css files
const del = require('del'); //For Cleaning build/dist for fresh export
const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P

const clean = function (cb) {
    console.log("\n\t" + logSymbols.info, "Cleaning build folder for fresh start.\n");
    return del(['build']);
};

const devStyles = function (cb) {
    var tailwindcss = require('tailwindcss');
    var autoprefixer = require('autoprefixer');
    var postCssImport = require('postcss-import');
    return src(options.paths.src.css + '/main.css')
        .pipe(postcss(
            [
                postCssImport,
                tailwindcss(options.config.tailwindcss),
                autoprefixer
            ]
        ))
        .pipe(concat({ path: 'main.css' }))
        .pipe(dest(options.paths.dist.css));
};

const javascript = function (cb) {

    cb();
};

function defaultTask(cb) {

    cb();
}

exports.default = series(clean, parallel(devStyles, javascript));
