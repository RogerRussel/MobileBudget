module.exports = function (gulp, $) {
  'use strict';

  // Watch Files For Changes
  gulp.task('watch', function () {
    gulp.watch('resources/assets/js/**/*.js', ['scripts']);
    gulp.watch('resources/assets/sass/**/*.sass', ['sass']);   
  });

};
