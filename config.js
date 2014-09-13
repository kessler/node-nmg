var rc = require('rc')
var path = require('path')
var homedir = require('homedir')

var templates = {
	minimal: path.join(__dirname, 'templates', 'minimal', '**/{.*,*}'),
	withrc: path.join(__dirname, 'templates', 'withrc', '**/{.*,*}')
}

var config = rc('nmg', {
	template: [ templates.minimal ],
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

config.output = path.join(homedir(), 'dev', 'nodejs', config.context.name)

module.exports = config