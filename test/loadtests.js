'use strict';

require('babel-polyfill');
require('core-js/fn/object/assign');

// Add support for all files in the test directory
const testsContext = require.context('../src/', true, /(Test\.js$)/);
testsContext.keys().forEach(testsContext);
