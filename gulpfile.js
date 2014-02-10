var gulp = require('gulp'),
    less = require('gulp-less'),
    clean = require('gulp-clean'),
    path = require('path'),
    livereload = require('gulp-livereload');

var cssFiles = ['public/stylesheets/*.css'], 
    jadeFiles = ['views/*.jade'],
    lessFiles = ['less/*.less'],
    lessCompileFiles = ['less/style.less'],
    cssFolder = path.join(__dirname, 'public', 'stylesheets'),
    lessFolder = path.join(__dirname, 'less');

gulp.task('clean-css', function() {
  return gulp.src(cssFiles, {read: false})
          .pipe(clean());
});

gulp.task('build-less', ['clean-css'], function() {
  return gulp.src(lessCompileFiles)
          .pipe(less({
            paths: lessFolder
          }))
          .on('error', function(err) { console.log(err.message.toString()); })
          .pipe(gulp.dest(cssFolder));
});

gulp.task('watch', function () {
  var server = livereload();

  gulp.watch(lessFiles, ['build-less']);
  gulp.watch(cssFiles, function(event) {
    server.changed(event.path);
  });
  gulp.watch(jadeFiles, function(event) {
    server.changed(event.path);
  });
});

gulp.task('default', function() {
  gulp.start('build-less');
});