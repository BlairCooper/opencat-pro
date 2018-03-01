# parse-git-config [![NPM version](https://badge.fury.io/js/parse-git-config.svg)](http://badge.fury.io/js/parse-git-config)  [![Build Status](https://travis-ci.org/jonschlinkert/parse-git-config.svg)](https://travis-ci.org/jonschlinkert/parse-git-config) 

> Parse `.git/config` into a JavaScript object. sync or async.

## Install with [npm](npmjs.org)

```bash
npm i parse-git-config --save
```

## Usage

```js
var git = require('parse-git-config');

// sync
var config = git.sync();

// or async
git(function (err, config) {
  // do stuff with err/config
});
```

Config object will be something like:

```js
{ core:
   { repositoryformatversion: '0',
     filemode: true,
     bare: false,
     logallrefupdates: true,
     ignorecase: true,
     precomposeunicode: true },
  'remote "origin"':
   { url: 'https://github.com/jonschlinkert/parse-git-config.git',
     fetch: '+refs/heads/*:refs/remotes/origin/*' },
  'branch "master"': { remote: 'origin', merge: 'refs/heads/master', ... } }
```


## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/parse-git-config/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on February 27, 2015._