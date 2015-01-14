var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var stylish = require('jshint-stylish');
var checkstyleFileReporter = require('jshint-checkstyle-file-reporter');

var htmlreplace = require('gulp-html-replace');
var react = require('gulp-react');


process.env.JSHINT_CHECKSTYLE_FILE = 'jshint.xml'; // default: checkstyle.xml


sources = {
  js: {
    my: './src/*.js',
    jq: '../bower_components/jquery/jquery.js',
    react: '../bower_components/react/react.js'
  },
  html: {
    main: './src/index.html'
  }
};


gulp.task('build-js-my', ['clean'], function () {
    return gulp.src(sources.js.my)
        .pipe(react( { harmony: true } ))
        .pipe(rename('transformed.js'))
        .pipe(gulp.dest('.'));
});


gulp.task('build-html-main', ['clean'], function() {
    return gulp.src(sources.html.main)
        .pipe(htmlreplace({
            'js-my': {
                src: ['transformed.js'],
                tpl: '<script src="%s"></script>'
            }
        }))
        .pipe(gulp.dest('.'))
        .on('error', gutil.log)
});

gulp.task('lint', function() {
  return gulp.src([sources.js.my])
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jshint.reporter(checkstyleFileReporter));
});


gulp.task('clean', function () {
    var src = ['jshint.xml', 'index.html', 'transformed.js'];
    return gulp.src(src, {read: false})
        .pipe(clean());
});


gulp.task('build', ['build-html-main', 'build-js-my']);

gulp.task('default', ['build']);