// --------------------------------------------------------------------
// define all required plugins
// --------------------------------------------------------------------

var   gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      csso         = require('gulp-csso'),
      uglify       = require('gulp-uglify'),
      concat       = require('gulp-concat'),
      rename       = require('gulp-rename');

// --------------------------------------------------------------------
// Task: sass
// compile scss-file into css-file
// --------------------------------------------------------------------

gulp.task('sass', function () {
    return gulp.src('./resources/assets/sass/app.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/css'));
});

// --------------------------------------------------------------------
// Task: mincss
// minify the the generated css-file
// --------------------------------------------------------------------

gulp.task('mincss', ['sass'], function () {
    return gulp.src('./public/css/app.css')
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css'));
});

// --------------------------------------------------------------------
// Task: concat
// take all js-files and generate a single js-file out of them
// --------------------------------------------------------------------

// snippet scripts src:resources/assets/js/scripts/*
// generated single script src: resources/assets/js/logic.js
// minified single script src: resources/assets/js/logic.min.js

// order of files -> order in final js
var jsFiles = [
    'resources/assets/js/scripts/script.js',
    'resources/assets/js/scripts/game.js'
];

gulp.task('concat', function () {
    return gulp.src(jsFiles)
        .pipe(concat('logic.js'))
        .pipe(gulp.dest('public/js'));
});

// --------------------------------------------------------------------
// Task: minjs
// minify and uglify the js-file generated with concat
// --------------------------------------------------------------------

gulp.task('minjs', ['concat'], function () {
    return gulp.src('public/js/logic.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/js'));
});

// --------------------------------------------------------------------
// watch task
// watch for file changes and override generated files
// --------------------------------------------------------------------

gulp.task('watch', function () {
  gulp.watch(['./resources/assets/sass/*.scss','./resources/assets/sass/**/*.scss'], ['sass', 'mincss']);
  gulp.watch(['./resources/assets/js/scripts/*.js'], ['concat', 'minjs']);
});

// --------------------------------------------------------------------
// default Task
// building scss and js assets to single minifed min.css and min.js files
// --------------------------------------------------------------------

gulp.task('default', ['sass', 'mincss', 'concat', 'minjs']);
