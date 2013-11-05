# users_api_and_backbone_app

Simple REST API and a CRUD backbone app

# Project Commands

## Linux(Ubuntu) node command line commands

### [js-beautify](https://github.com/einars/js-beautify) the project

Install js-beautify

```bash
npm install -g js-beautify
```

Beautify a file

```bash
js-beautify -r --max-preserve-newlines 1 --jslint-happy collections/users.js
```
Beautify your entire project. Run from project's root directory. Not meant to be run on node_modules, minified libraries, "require.js" and "main-built.js"

```bash
find . \( -name "*.js" -o -name "*.json" \) -not -path "./node_modules*" -not -path "./public/js/lib*" -not -name "require.js" -not -name "main-built.js" -print0 | xargs -0 js-beautify -r --max-preserve-newlines 1 --jslint-happy
```

Beautify HTML

```bash
find . \( -name "*.html" \) -not -path "./node_modules*" -print0 | xargs -0 html-beautify -r
```

Beautify CSS. Not meant to be run on "*min.css"

```bash
find . \( -name "*.css" -a -not -name "*min.css" \) -not -path "./node_modules*" -print0 | xargs -0 css-beautify -r
```

### [node-jslint](https://github.com/reid/node-jslint) the project

Install jslint 

```bash
npm install -g jslint
```

JSLint your entire project. Run from project's root directory. Not meant to be run on node_modules, minified libraries, "require.js" and "main-built.js"

```bash
find . \( -name "*.js" -o -name "*.json" \) -not -path "./node_modules*" -not -path "./public/js/lib*" -not -name "require.js" -not -name "main-built.js" -print0 | xargs -0 jslint --nomen --sloppy --devel --white --regexp --predef define --predef app --predef _ --predef $ --predef jQuery --predef requirejs --predef Backbone
```

Same with --browser (set to true)

```bash
find . \( -name "*.js" -o -name "*.json" \) -not -path "./node_modules*" -not -path "./public/js/lib*" -not -name "require.js" -not -name "main-built.js" -print0 | xargs -0 jslint --nomen --sloppy --devel --white --browser --regexp --predef define --predef app --predef _ --predef $ --predef jQuery --predef requirejs --predef Backbone
```