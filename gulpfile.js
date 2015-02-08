var gulp = require('gulp')
var log = require('gulp-util').log
var path = require('path')
var template = require('gulp-template')
var util = require('util')
var cloneDeep = require('lodash.clonedeep')
var child = require('child_process')
var async = require('async')
var _ = require('lodash')
var rename = require("gulp-rename");

var usage = require('./usage.js')
var config = require('./config.js')

/*
	show help when exiting the process?
*/
var showHelp = false

/*
	dependencies for create task
*/
var createDeps = ['create-module']
var subtaskDeps; // gulp needs sub tasks to depend on other sub task if they are not be executed in parallel

/* 
	create repo on github?
*/
if (config.inithub || config.github) {
	createDeps.push('create-github')	
	subtaskDeps = ['create-module']
}

/*
	init a git repo locally?
*/
if (config.inithub || config.gitinit) {
	createDeps.push('gitinit')
	subtaskDeps = ['create-module']
}

/*
	maps directly to the "create" command given by the user (nmg create ...)
*/
gulp.task('create', createDeps, function (cb) {
	setImmediate(cb)
})

/*
	create the code / template of the module

	if user specified --github, this will also create a repository on github
	if user specified --gitinit this will initialized a git repository locally
	if user specified --inithub this will do both
*/	
gulp.task('create-module', function() {
	
	return gulp.src(config.template)
	.pipe(rename(function (path) {
		
		if (path.basename === '_npmignore') {
			log('renaming _npmignore to .npmignore')
			path.basename = '.npmignore'
		}

		if (path.basename === '_gitignore') {
			log('renaming _gitignore to .gitignore')
			path.basename = '.gitignore'
		}
	}))		
	.pipe(template(config.context))
	.pipe(gulp.dest(config.output))

})

/*
	create a repository on github
*/
gulp.task('create-github', subtaskDeps,  function (cb) {
	var github = require('./github.js')
	var context = cloneDeep(config.context)

	github.getRepo(context, function (err, exists, info) {

		if (exists) return cb()

		if (err) return cb(err)

		github.createRepo(context, function(err) {
			if (err) return cb(err)

			log(util.format('created github repository https://github.com/%s/%s', context.github.user, context.name))	

			cb()
		})
	})
})

/*
	create a local git repository
*/
gulp.task('gitinit', subtaskDeps, function (cb) {
	var context = cloneDeep(config.context)

	var url = util.format('https://github.com/%s/%s', context.github.user, context.name)
	log('initializing git repo at ' + config.output)
	log('for github repository ' + url)

	process.chdir(config.output)

	async.series([
		_.partial(git, 'init'),
		_.partial(git, 'add --all'),
		_.partial(git, 'commit -am "initial"'),
		_.partial(git, 'remote add origin ' + url)
	], cb)	
})

/*
	execute a git command
*/
function git(cmd, callback) {
	
	child.exec(config.gitCmd + ' ' + cmd, function(err, stdout, stderr) {
		if (err) {
			log(stderr)
			return cb(err)
		}

		log(stdout.trim())

		callback()
	})
}

gulp.on('task_not_found', function (err) {
	showHelp = true
})

process.on('exit', function () {
	if (showHelp) {
		log(usage)
	}
})