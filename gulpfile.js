var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpJade = require('gulp-jade');

gulp.task('saludar', function(){
	console.log('Examen individual');
});

gulp.task('compilar_sass', function(){
	return gulp.src('./sass/main.scss')
    	.pipe(gulpSass())
    	.pipe(gulp.dest('./css'));
});

gulp.task('compilar_jade', function(){
	return gulp.src('./jade/index.jade')
    	.pipe(gulpJade())
    	.pipe(gulp.dest('./public'));
});

gulp.task('vigilar_sass', function(){
	return gulp.watch('./sass/main.scss', ['compilar_sass']);
});

gulp.task('vigilar_jade', function(){
	return gulp.watch('./jade/index.jade', ['compilar_jade']);
});

gulp.task('default', [ 'saludar', 'vigilar_jade', 'vigilar_sass' ]);
