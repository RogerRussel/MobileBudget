module.exports = function (gulp, $) {
  'use strict';

  var scripts = [
    'resources/assets/js/vendor/**/*.js',
    'resources/assets/js/app/**/*.js'
  ];

  gulp.task('watch', function () {
    gulp.watch(scripts, ['scripts']);
    gulp.watch([
      'resources/assets/sass/**/*.sass',
      'resources/assets/sass/vendor/**/*.css'
    ], ['sass']);
  });

};
