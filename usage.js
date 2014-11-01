var table = require('text-table');

module.exports = table([
['Commands:'],
['create [name]',					'create a repo command'],
['create-github [name]',			'create a github repository (create [name] --github will do that too)'],
['gitinit [name]',					'init a local git repository, add all files and commit'],
[''],
['Options:'],
['--inithub',				'create a repo on github and init a local git repo (same as --github --gitinit)',	''],
['--github',					'create a repo on github',			''],
['--gitinit',					'init a local git repository',			''],
['--githubToken',			'github api token',			'		'],
['--githubToken',			'github api token',					''],
['--template',				'a glob expression',				'[default: minimal template]'],
['--output',				'module output path',				'[default: process.cwd()/${name}]'],
['--context.private',		'private repo/package',			'[default: false]'],
['--context.name',			'module/repo name',				'[default: "nmg-module"]'],
['--context.description',	'module/repo description',			''],
['--context.author',		'author name',						'[default: "me"]'],
['--context.github.user',	'github user name',				'']
]);
