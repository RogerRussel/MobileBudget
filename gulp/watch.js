module.exports = function (gulp, $) {
  'use strict';

  // Watch Files For Changes

  var scripts = [
    'resources/assets/js/vendor/**/*.js',
    'resources/assets/js/app/**/*.js'
  ];

  gulp.task('watch', function () {
    gulp.watch(scripts, ['scripts']);
    gulp.watch('resources/assets/sass/**/*.sass', ['sass']);   
  });

};
