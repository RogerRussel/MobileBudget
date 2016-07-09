module.exports = function (gulp, $) {
  'use strict';

  var gulp = require('gulp');
  var shell = require('gulp-shell');

  var nodeCommand = 'node-sass --output-style="compressed"';

  var stylesheetsPrivatePath = 'resources/assets/sass';
  var stylesheetsPublicPath = 'app/www/assets/css';

  gulp.task('sass', shell.task([
    nodeCommand + ' ' + stylesheetsPrivatePath + '/app.sass ' + stylesheetsPublicPath + '/app.min.css'
  ]));

};