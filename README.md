# my Node Module Generator - WIP

```
	npm install -g nmg
```
configure and then
```
	nmg create module
	nmg create module --github // also create a repo on github
	nmg create module --gitinit // also create a local git repo, add all files and do initial commit
	nmg create module --inithub // combine the above two commands
```

# todo
- add makefile to minimal
- add .editorconfig to minimal
- add .jshintrc to minimal
- fix whitespaces in package.json minimal template
- add partials support
- use proper cli / args lib (like yargs or nomnom)