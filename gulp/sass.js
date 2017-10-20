/*
  sass.js
  ===========
  compiles sass from assets folder with the well_modules
  also includes sourcemaps
*/

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const config = require('./config.json')
const wellModules = config.paths.wellModules

gulp.task('sass', function () {
  return gulp.src(`${config.paths.assets}/sass/*.scss`)
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded',
    includePaths: [
      `${wellModules}sass-mq/`,
      `${wellModules}normalize-scss/sass/`
    ]
  }).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(`${config.paths.public}/stylesheets/`))
})
