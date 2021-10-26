const executeAll = require('./executeAll');
const doNothing = require('./doNothing');

executeAll([
    'node packageBump',
    'npm publish'
], doNothing);