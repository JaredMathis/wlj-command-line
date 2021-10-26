var readline = require('readline');
  
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.setPrompt('');
rl.prompt();
rl.on('line', (age) => {
    console.log(`Age received by the user: ${age}`);
});