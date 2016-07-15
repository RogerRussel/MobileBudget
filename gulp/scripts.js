module.exports = function (gulp, $) {
  'use strict';

  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');

  var scriptsPublicPath = "app/www/assets/js/";
  var scriptsPrivatePath = "resources/assets/js/";

// Concatenate & Minify JS
  gulp.task('scripts', function () {

    return gulp.src([
      scriptsPrivatePath + 'vendor/angularjs/**/*.js',
      scriptsPrivatePath + 'vendor/firebase/**/*.js',      
      scriptsPrivatePath + 'vendor/angularfire/**/*.js',
      scriptsPrivatePath + 'app/app.js',
      scriptsPrivatePath + 'app/db.js',      
      scriptsPrivatePath + 'app/**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(scriptsPublicPath))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(scriptsPublicPath));

  });

};