
const arguments = process.argv.slice(2)
const fileName = arguments[0];
const left = arguments[1];
const right = arguments[2];

const fs = require('fs')

const text = fs.readFileSync(fileName, 'utf8');
const replaced = text.replace(new RegExp(left, 'g'), right);
fs.writeFileSync(fileName, replaced);
