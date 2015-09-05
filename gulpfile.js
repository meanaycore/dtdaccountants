var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	compressor = require('gulp-compressor'),
	livereload = require('gulp-livereload'),
	browserify = require('gulp-browserify'),
	page = require('page'),
	autoprefixer = require('gulp-autoprefixer');


// Error Logger
// Logs Bugs
function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
	gulp.src('development/src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('production/src/js'))
	.pipe(livereload());
});



// Html Task
// Minifies Html

gulp.task('html', function(){
	gulp.src('development/src/*.html')
	.pipe(compressor({
		'remove-intertag-spaces': true,
            'simple-bool-attr': true,
            'compress-js': true,
            'compress-css': true
	}))
	.pipe(gulp.dest('production/src/'))
	.pipe(livereload());
});

// Browserify
// is here

gulp.task('brow', function() {

	return gulp.src('development/src/js/*.js')
		.pipe(browserify({ debug: true }))
		.pipe(gulp.dest('production/src/js'));

});

gulp.task('styles', function(){
	gulp.src('development/src/sass/*.scss')
	.pipe(sass({
		style: 'compressed'
	}))
	 .pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest('production/src/css'))
	.pipe(livereload());
});

// Watch Task
// Watches JS
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('development/src/js/*.js', ['scripts']);
	gulp.watch('development/src/sass/*.scss', ['styles']);
	gulp.watch('development/src/*.html', ['html']);

});

gulp.task('default', ['scripts', 'styles','html', 'watch']);