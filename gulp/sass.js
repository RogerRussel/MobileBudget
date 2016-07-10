module.exports = function (gulp, $) {
  'use strict';

  var gulp = require('gulp');
  var shell = require('gulp-shell');
  var concat = require('gulp-concat');

  var nodeCommand = 'node-sass --output-style="compressed"';

  var stylesheetsPrivatePath = 'resources/assets/sass';
  var stylesheetsPublicPath = 'app/www/assets/css';

  gulp.task('sass-compile', shell.task([
    nodeCommand + ' ' + stylesheetsPrivatePath + '/app.sass ' + stylesheetsPrivatePath + '/app.css'
  ]));

  gulp.task('sass',['sass-compile'], function () {
    gulp.src([
        stylesheetsPrivatePath + '/vendor/framework7/framework7.material.min.css',
        stylesheetsPrivatePath + '/vendor/framework7/framework7.material.colors.min.css',
        stylesheetsPrivatePath + '/app-header.txt',
        stylesheetsPrivatePath + '/app.css'
    ])
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(stylesheetsPublicPath));
  });

};