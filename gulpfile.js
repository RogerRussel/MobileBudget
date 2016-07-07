'use strict';

// Normally I would prefer user laravel default, but, I will not rewrite all previous project. :(

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    taskPath = './gulp/',
    // async readdir does not identify task names
    taskList = require('fs').readdirSync(taskPath);

taskList.forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins);
});