var gulp = require('gulp');
var sass = require('gulp-sass');
var mustache = require('gulp-mustache');
var htmlData = require('./src/data');

gulp.task('html', function () {
	return gulp.src('./src/templates/index.html')
	    .pipe(mustache(htmlData))
	    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
	gulp.watch('./src/templates/**/*.html', ['html']);
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});
