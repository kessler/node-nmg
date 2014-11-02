# my Node Module Generator - WIP

An efficiency tool.

This tool will create a new module for you, based on a template. It can also create a github project automatically as well as initialized git in the newly created module.

```
	npm install -g nmg
	nmg create awesome --inithub
```
configure by creating an [rc](https://github.com/dominictarr/rc) config somewhere (probably ~/.config)
```
{
	"context": {
		"author": "[your name]",
		"github": {
			"user": "[your github username]"
		}
	},

	"githubToken": "[a github token with repo permissions]"
}
```
and then
```
	nmg create [moduleName]
	nmg create [moduleName] --github // also create a repo on github
	nmg create [moduleName] --gitinit // also create a local git repo, add all files and do initial commit
	nmg create [moduleName] --inithub // combine the above two commands
```
You can also do
```
	nmg --usage
```
to see some help

# todo
- add makefile to minimal
- add .editorconfig to minimal
- add .jshintrc to minimal
- fix whitespaces in package.json minimal template
- add partials support
- use proper cli / args lib (like yargs or nomnom)