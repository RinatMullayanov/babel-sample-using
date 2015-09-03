var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var config = {
  srcDir: 'src'
};

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task('browserify', ['babel'], function() {
  return browserify('./dist/all.js')
    .bundle()
    .pipe(source(config.src + '/bundle.js'))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

gulp.task("default", ["browserify"], function () {
});