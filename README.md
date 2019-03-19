xxencode
========

[![Build Status](https://travis-ci.org/zer0i3/node-xxencode.svg?branch=master)](https://travis-ci.org/zer0i3/node-xxencode)

Node.js implementation of xxencode.

More information on the xxencode encoding can be found [here](https://en.wikipedia.org/wiki/Xxencoding).

Installation
--------

```shell
npm install xxencode
```
Examples
--------

The following examples show you how to use xxencode.

```javascript
var xxencode = require('xxencode');

// encode something
var encoded = xxencode.encode('zer0i3');
// '4SaJmA4Yn'

// decode something
var decoded = xxencode.decode('4SaJmA4Yn');
// 'zer0i3'
```

Running Tests
----

    $ npm test

Note the xxencode utility must be installed for all tests to pass.
