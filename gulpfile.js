var gulp = require("gulp");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

var browserify = require('browserify');
var source = require('vinyl-source-stream')

var config = {
  srcDir: 'src',
  distDir: 'dist'
};

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.distDir));
});

gulp.task("babel-for-browserify", function () {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest(config.distDir));
});

gulp.task('like-babelify', ["babel", "babel-for-browserify"], function() {
  return browserify('./dist/all.js', { debug: true }) // enable sourceMap inside bundle.js file
    .bundle()
    .pipe(source(config.distDir + '/bundle.js'))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.js'], ['like-babelify']);
});

gulp.task("default", ["like-babelify"], function () {
});