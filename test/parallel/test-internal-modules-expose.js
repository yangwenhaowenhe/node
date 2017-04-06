'use strict';
// Flags: --expose_internals

require('../common');
const assert = require('assert');

assert.strictEqual(typeof require('internal/freelist').FreeList, 'function');
assert(!('_exposeInternals' in process), 'no process property is leaked');
