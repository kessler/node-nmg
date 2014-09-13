var yargs = require('yargs')
var config = require('./config.js')

if (!config._ || config._.length === 0) {
	console.error('ERROR: missing any command\n')
	yargs.showHelp()
	process.exit(1)
}

var command = config._[0]

if (command === 'create') {	
	require('../node_modules/gulp/bin/gulp.js')	
} else {
	console.error('ERROR: unknown command %s\n', command)
	yargs.showHelp()
	process.exit(1)	
}
