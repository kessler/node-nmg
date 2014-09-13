var table = require('text-table');

module.exports = table([
['Commands:'],
['create',					'create a repo command'],
[''],
['Options:'],
['--template',				'a glob expression',		'[default: minimal template]'],
['--output',				'module output path',		'[default: ~/dev/nodejs/${name}]'],
['--github',				'create a repo on github',	''],
['--githubToken',			'github api token',			''],
['--context.private',		'private repo/package',		'[default: false]'],
['--context.name',			'module/repo name',			'[default: "nmg-module"]'],
['--context.description',	'module/repo description',	''],
['--context.author',		'author name',				'[default: "me"]'],
['--context.github.user',	'github user name',			'']
]);
