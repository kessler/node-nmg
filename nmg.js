#!/usr/bin/env node
var config = require('./config.js')
var usage = require('./usage.js')
var path = require('path')

if (!config._ || config._.length === 0) {
	console.error('ERROR: missing a command\n')
	console.error(usage)
	process.exit(1)
}

var command = config._[0]

if (['create', 'gitinit', 'create-github'].indexOf(command) === -1) {
	console.error('ERROR: unknown command %s\n', command)
	console.error(usage)
	process.exit(1)
} else if (!config._[1]) {
	console.error('ERROR: missing name\n')
	console.error(usage)
	process.exit(1)
}

// TODO: hacky code cleanup here 
// super ugly hack to prevent gulp from throwing an error on the project name argument (gulp thinks its another task to run)
if (config._.length > 1) {
	for (var i = 0; i < config._.length; i++) {
		var index = process.argv.indexOf(config._[i])	

		// dont splice node and script name ever
		if (index > 1)
			process.argv.splice(index + 1, 1)
	}
}

// TODO: hacky code cleanup here 
// change gulp's cwd
// TODO test this works in windows
process.argv.push('--cwd=' + __dirname)

// TODO: need to send PR to gulp that separates all the orchastration of the cli from the actual cli source file
// so it can be invoked programmatically, especially with custom argv
require('./node_modules/gulp/bin/gulp.js')