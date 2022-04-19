const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', function () {
  const tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject());

  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.tmp/release'));
});

gulp.task('uglify', function () {
  return pipeline(
    gulp.src('.tmp/release/**/*.js'),
    uglify(),
    gulp.dest('dist')
  );
});

gulp.task('clean', function () {
  return gulp.src('.tmp', { read: false })
    .pipe(clean());
});

gulp.task('default', gulp.series('compile', 'uglify', 'clean'));
