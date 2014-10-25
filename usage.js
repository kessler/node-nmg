var table = require('text-table');

module.exports = table([
['Commands:'],
['create [name]',					'create a repo command'],
['gitinit [name]',					'init a local git repository, add all files and commit'],
[''],
['Options:'],
['--template',				'a glob expression',		'[default: minimal template]'],
['--output',				'module output path',		'[default: process.cwd()/${name}]'],
['--github',				'create a repo on github',	''],
['--githubToken',			'github api token',			''],
['--context.private',		'private repo/package',		'[default: false]'],
['--context.name',			'module/repo name',			'[default: "nmg-module"]'],
['--context.description',	'module/repo description',	''],
['--context.author',		'author name',				'[default: "me"]'],
['--context.github.user',	'github user name',			'']
]);
