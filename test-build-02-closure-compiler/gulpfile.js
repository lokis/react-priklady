var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var stylish = require('jshint-stylish');
var checkstyleFileReporter = require('jshint-checkstyle-file-reporter');

var htmlreplace = require('gulp-html-replace');
var react = require('gulp-react');
var closureCompiler = require('gulp-closure-compiler');


process.env.JSHINT_CHECKSTYLE_FILE = 'jshint.xml'; // default: checkstyle.xml


sources = {
    js: {
        my: './src/*.js',
        jq: '../bower_components/jquery/jquery.js',
        react: '../bower_components/react/react.js',
        transformed: 'transformed.js',
        compiled: 'compiled.js'
    },
    html: {
        main: './src/index.html'
    }
};


gulp.task('build-js-my', ['build-js-transform'], function () {
    //return gulp.src([sources.react, sources.js.transformed])
    return gulp.src([sources.js.react, sources.js.transformed])
        .pipe(closureCompiler({
            compilerPath: '../bower_components/closure-compiler/lib/vendor/compiler.jar',
            fileName: 'a.js',//sources.js.compiled,
            compilerFlags: {
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                externs: [
                    '../bower_components/react-externs/externs.js'
                ],
                //only_closure_dependencies: true,
                output_wrapper: '(function(){%output%})();'
                //warning_level: 'VERBOSE'
            }
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('build-js-transform', ['clean'], function () {
    return gulp.src(sources.js.my)
        .pipe(react({harmony: true}))
        .pipe(rename(sources.js.transformed))
        .pipe(gulp.dest('.'));
});


gulp.task('build-html-main', ['clean'], function () {
    return gulp.src(sources.html.main)
        .pipe(htmlreplace({
            'js-my': {
                src: [sources.js.compiled],
                tpl: '<script src="%s"></script>'
            }
        }))
        .pipe(gulp.dest('.'))
        .on('error', gutil.log)
});

gulp.task('lint', function () {
    return gulp.src([sources.js.my])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter(checkstyleFileReporter));
});


gulp.task('clean', function () {
    var src = ['jshint.xml', 'index.html', sources.js.compiled, sources.js.transformed];
    return gulp.src(src, {read: false})
        .pipe(clean());
});


gulp.task('build', ['build-html-main', 'build-js-my']);

gulp.task('compiler', ['build-js-my']);

gulp.task('default', ['build']);