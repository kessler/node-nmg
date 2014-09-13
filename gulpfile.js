var gulp = require('gulp')
var log = require('gulp-util').log
var path = require('path')
var template = require('gulp-template')
var util = require('util')
var config = require('./config.js')

log(util.inspect(config))

gulp.task('default', function() {
	
	return gulp.src(config.t)		
	.pipe(template(config.context))
	.pipe(gulp.dest(config.o))
})
