var rc = require('rc')
var path = require('path')
var homedir = require('homedir')

var templates = {
	minimal: path.join(__dirname, 'templates', 'minimal', '**/{.*,*}'),
	withrc: path.join(__dirname, 'templates', 'withrc', '**/{.*,*}')
}

var config = rc('nmg', {
	gitCmd: 'git',
	template: [ templates.minimal ],
	private: false,
	context: {
		private: false,
		name: 'nmg-module',
		description: '',
		author: 'me',
		github: {
			user: ''
		}
	} 
})

// TODO: hacky code cleanup here 
if (config._.length >= 2) {
	config.context.name = config._[1].toString()
}

if (config.private) {
	config.context.private = true
}

config.output = path.join(process.cwd(), config.context.name)

module.exports = config