var gulp = require('gulp');
var browserSync = require('browser-sync').create();

function html() {
    return gulp.src('./index-START.html')
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: './index-START.html'
        }
    });
    browserSync.reload();
    gulp.watch('./index-START.html').on('change', browserSync.reload);
}

exports.watch = watch