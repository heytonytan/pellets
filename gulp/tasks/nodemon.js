'use strict';

// Ref: https://gist.github.com/sogko/b53d33d4f3b40d3b4b2e
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true; 
    } 
  });
});