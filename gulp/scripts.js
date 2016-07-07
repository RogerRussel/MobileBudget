module.exports = function (gulp, $) {
  'use strict';

  var shell = require('gulp-shell');
  var browserSync = require('browser-sync');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');

  var scriptsPublicPath = "public/";
  var scriptsPrivatePath = "resources/";

// Concatenate & Minify JS
  gulp.task('scripts-make', function () {

    return gulp.src([
      scriptsPrivatePath + 'assets/js/vendor/beautify-html.js',
      scriptsPrivatePath + 'assets/js/vendor/jquery.js',
      scriptsPrivatePath + 'assets/js/vendor/icheck.js',
      scriptsPrivatePath + 'assets/js/vendor/moment.js',
      scriptsPrivatePath + 'assets/js/builder/utils/stringHelpers.js',
      scriptsPrivatePath + 'assets/js/vendor/jquery-ui.js',
      scriptsPrivatePath + 'assets/js/vendor/resizable.js',
      scriptsPrivatePath + 'assets/js/vendor/html2canvas.min.js',
      scriptsPrivatePath + 'assets/js/vendor/bootstrap/transition.js',
      scriptsPrivatePath + 'assets/js/vendor/bootstrap/collapse.js',
      scriptsPrivatePath + 'assets/js/vendor/bootstrap/modal.js',
      scriptsPrivatePath + 'assets/js/vendor/bootstrap/dropdown.js',
      scriptsPrivatePath + 'assets/js/vendor/bootstrap/alert.js',
      scriptsPrivatePath + 'assets/js/vendor/bootstrap/tooltip.js',
      scriptsPrivatePath + 'assets/js/vendor/pagination.js',
      scriptsPrivatePath + 'assets/js/vendor/jquery.mCustomScrollbar.js',
      scriptsPrivatePath + 'assets/js/vendor/jquery.mousewheel.js',
      scriptsPrivatePath + 'assets/js/vendor/toggles.js',
      scriptsPrivatePath + 'assets/js/vendor/alertify.js',
      scriptsPrivatePath + 'assets/js/vendor/rangy/rangy-core.js',
      scriptsPrivatePath + 'assets/js/vendor/rangy/rangy-cssclassapplier.js',
      scriptsPrivatePath + 'assets/js/vendor/spectrum.js',
      scriptsPrivatePath + 'assets/js/vendor/knob.js',
      scriptsPrivatePath + 'assets/js/vendor/zero-clip.min.js',
      scriptsPrivatePath + 'assets/js/vendor/angular.min.js',
      scriptsPrivatePath + 'assets/js/vendor/angular-animate.min.js',
      scriptsPrivatePath + 'assets/js/vendor/angular-cookies.js',
      scriptsPrivatePath + 'assets/js/vendor/angular-ui-router.min.js',
      scriptsPrivatePath + 'assets/js/vendor/angular-translate.js',
      scriptsPrivatePath + 'assets/js/vendor/angular-translate-url-loader.js',
      scriptsPrivatePath + 'assets/js/vendor/flow.js',
      scriptsPrivatePath + 'assets/js/builder/styling/fonts.js',
      scriptsPrivatePath + 'assets/js/builder/dragAndDrop/draggable.js',
      scriptsPrivatePath + 'assets/js/builder/dragAndDrop/iframeScroller.js',
      scriptsPrivatePath + 'assets/js/builder/dragAndDrop/resizable.js',
      scriptsPrivatePath + 'assets/js/builder/dragAndDrop/grid.js',
      scriptsPrivatePath + 'assets/js/builder/resources/icons.js',
      scriptsPrivatePath + 'assets/js/builder/resources/colors.js',
      scriptsPrivatePath + 'assets/js/builder/editors/wysiwyg.js',
      scriptsPrivatePath + 'assets/js/builder/elements/definitions/bootstrap.js',
      scriptsPrivatePath + 'assets/js/builder/elements/definitions/base.js',
      scriptsPrivatePath + 'assets/js/builder/elements/panel.js',
      scriptsPrivatePath + 'assets/js/builder/elements/repository.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/inspector.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/attributes.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/border.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/marginPadding.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/text.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/shadows.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/actions.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/background/background.js',
      scriptsPrivatePath + 'assets/js/builder/inspector/background/mediaManagerController.js',
      scriptsPrivatePath + 'assets/js/builder/settings.js',
      scriptsPrivatePath + 'assets/js/builder/directives.js',
      scriptsPrivatePath + 'assets/js/builder/app.js',
      scriptsPrivatePath + 'assets/js/builder/controllers/navbarController.js',
      scriptsPrivatePath + 'assets/js/builder/controllers/linkerController.js',
      scriptsPrivatePath + 'assets/js/builder/controllers/dashboardController.js',
      scriptsPrivatePath + 'assets/js/builder/controllers/newProjectController.js',
      scriptsPrivatePath + 'assets/js/builder/context/contextBoxes.js',
      scriptsPrivatePath + 'assets/js/builder/undoManager.js',
      scriptsPrivatePath + 'assets/js/builder/dom.js',
      scriptsPrivatePath + 'assets/js/builder/context/contextMenu.js',
      scriptsPrivatePath + 'assets/js/builder/dragAndDrop/iframeDragAndDropWidget.js',
      scriptsPrivatePath + 'assets/js/builder/dragAndDrop/columnsResizeWidget.js',
      scriptsPrivatePath + 'assets/js/builder/editors/codeEditor.js',
      scriptsPrivatePath + 'assets/js/builder/editors/libraries.js',
      scriptsPrivatePath + 'assets/js/builder/styling/themes.js',
      scriptsPrivatePath + 'assets/js/builder/styling/templates.js',
      scriptsPrivatePath + 'assets/js/builder/styling/themesCreator.js',
      scriptsPrivatePath + 'assets/js/builder/styling/css.js',
      scriptsPrivatePath + 'assets/js/builder/utils/localStorage.js',
      scriptsPrivatePath + 'assets/js/builder/editors/imageEditor.js',
      scriptsPrivatePath + 'assets/js/builder/projects/project.js',
      scriptsPrivatePath + 'assets/js/builder/projects/pagesController.js',
      scriptsPrivatePath + 'assets/js/builder/projects/export.js',
      scriptsPrivatePath + 'assets/js/builder/projects/exportToFtp.js',
      scriptsPrivatePath + 'assets/js/builder/keybinds.js',
      scriptsPrivatePath + 'assets/js/builder/users/usersController.js',
      scriptsPrivatePath + 'assets/js/builder/dashboard/template.js',
      scriptsPrivatePath + 'assets/js/builder/translator.js',
      scriptsPrivatePath + 'assets/js/builder/**/**.js'
    ])
    //.pipe(sourcemaps.init())
    .pipe(concat('assets/js/builder.min.js'))
    //.pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest(scriptsPublicPath))
    .pipe(browserSync.reload({stream: true}));

  });

  gulp.task('scripts', ['scripts-make'], shell.task([
    "echo `date +%Y%m%d%H%M%S.%N` > " + scriptsPublicPath + 'assets/js/javascripts.log'
  ]));

};