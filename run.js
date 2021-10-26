var readline = require('readline');
const executeThenGitAddCommitPush = require('./executeThenGitAddCommitPush');
  
var rl = readline.createInterface(
    process.stdin, process.stdout);

displayPrompt();
rl.setPrompt('');
rl.prompt();
rl.on('line', (line) => {
    executeThenGitAddCommitPushThen(line, displayPrompt);
});

function displayPrompt( ) {
    console.log('Please enter command. Afterward will git add, commit and push')
}