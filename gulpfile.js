var gulp = require('gulp');
var sass = require('gulp-sass');
var mustache = require('gulp-mustache');
var htmlData = require('./src/data');
var browserify = require('gulp-browserify');

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

gulp.task('scripts', function () {
	return gulp.src('./src/js/main.js')
		.pipe(browserify({
			insertGlobals : true,
			debug : !process.env.production
		  }))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function () {
	gulp.watch('./src/templates/**/*.html', ['html']);
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.js', ['scripts']);
});
