var github = require('octonode')
var config = require('./config.js')

if (!config.githubToken) {
	console.error('ERROR: cannot use without a configured github token')
	process.exit(1)
}

var client = github.client(config.githubToken).me();

module.exports.createRepo = function(context, callback) {
	if (context.name)
		client.repo(context, callback)
	else
		return callback(new Error('missing repository name'))
}