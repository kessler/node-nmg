#!/usr/bin/env node
var config = require('./config.js')
var usage = require('./usage.js')

if (!config._ || config._.length === 0) {
	console.error('ERROR: missing any command\n')
	console.error(usage)
	process.exit(1)
}

var command = config._[0]

if (['create'].indexOf(command) === -1) {
	console.error('ERROR: unknown command %s\n', command)
	console.error(usage)
	process.exit(1)	
}

require('./node_modules/gulp/bin/gulp.js')	
