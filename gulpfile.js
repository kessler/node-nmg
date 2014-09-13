var gulp = require('gulp')
var log = require('gulp-util').log
var path = require('path')
var template = require('gulp-template')
var util = require('util')
var config = require('./config.js')
var cloneDeep = require('lodash.clonedeep')
var usage = require('./usage.js')

var showHelp = false

var createDeps = []

// create repo on github too
if (config.github)
	createDeps.push('create-github')

gulp.task('create', createDeps, function() {
	
	return gulp.src(config.template)		
	.pipe(template(config.context))
	.pipe(gulp.dest(config.output))
})

gulp.task('create-github', function (cb) {
	var github = require('./github.js')
	var context = cloneDeep(config.context)
	context.name = 'node-' + context.name	
	github.createRepo(context, function(err) {
		if (err) return cb(err)

		log(util.format('created github repository https://github.com/%s/%s', context.github.user, context.name))	

		cb()
	})
})

gulp.on('task_not_found', function (err) {
	showHelp = true
})

process.on('exit', function () {
	if (showHelp) {
		log(usage)
	}
})