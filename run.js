var readline = require('readline');
const executeThenGitAddCommitPush = require('./executeThenGitAddCommitPush');
  
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.setPrompt('');
rl.prompt();
rl.on('line', (line) => {
    executeThenGitAddCommitPush(line);
});