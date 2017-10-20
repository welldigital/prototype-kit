/*
  copy-gov-modules.js
  ===========
  copies files for node_modules into govuk_modules
*/

const gulp = require('gulp')
const config = require('./config.json')

gulp.task('copy-sass-mq', function () {
  return gulp.src([`node_modules/sass-mq/**`])
  .pipe(gulp.dest(`${config.paths.wellModules}/sass-mq/`))
})

gulp.task('copy-normalize-scss', function () {
  return gulp.src([`node_modules/normalize-scss/**`])
  .pipe(gulp.dest(`${config.paths.wellModules}/normalize-scss/`))
})
