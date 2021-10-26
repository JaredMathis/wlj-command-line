const fs = require('fs');
const fileName = 'package.json';
const text = fs.readFileSync(fileName, 'utf8');
const parsed = JSON.parse(text);
// console.log(parsed.version);
const split = parsed.version.split('.');
const oldVersion = parseInt(split[2], 10);
const newVersion = oldVersion + 1;
split[2] = newVersion.toString();
parsed.version = split.join('.');
fs.writeFileSync(fileName, JSON.stringify(parsed, ' ', 2))
