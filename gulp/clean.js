/*
  clean.js
  ===========
  removes folders:
    - public
    - govuk_modules
*/
const config = require('./config.json')

const gulp = require('gulp')
const clean = require('gulp-clean')

gulp.task('clean', function () {
  return gulp.src([config.paths.public + '/*',
    '.port.tmp'], {read: false})
  .pipe(clean())
})
