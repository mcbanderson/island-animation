var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('copy', function () {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'));
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('browserify', function () {
    var b = browserify({
        entries: './src/island.js',
        transform: [babelify]
    });

    return b.bundle()
            .pipe(source('./island.js'))
            .pipe(gulp.dest('./dist/'));
});

gulp.task('default', gulp.series('copy', 'browserify'));

gulp.task('watch', function() {
    gulp.watch('./src/**/*', gulp.series('default'));
});
