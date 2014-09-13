var rc = require('rc')
var path = require('path')
var homedir = require('homedir')
var yargs = require('yargs')

var templates = {
	minimal: path.join(__dirname, 'templates', 'minimal', '**/{.*,*}'),
	withrc: path.join(__dirname, 'templates', 'withrc', '**/{.*,*}')
}

// command line stuff
var argv = yargs
.options('t', {
	alias : 'template',
	default : [ templates.minimal ]
})
//TODO homedir()
.options('o', {
	alias: 'output',
	default: path.join(__dirname, 'output')
})
.usage('$0 [command] [options]')
.argv

if (argv.usage) {
	yargs.showHelp()
	process.exit(0)
}

// rc (expose argv through rc)
module.exports = rc('nmg', { 
	context: {
		private: false,
		name: 'a-module',
		description: '',
		author: '',
		github: {
			user: ''
		}
	} 
}, argv)