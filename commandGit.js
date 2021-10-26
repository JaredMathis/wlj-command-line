
const executeThenGitAddCommitPush = require('./executeThenGitAddCommitPush');

const message = process.argv.slice(2).join(" ");
//console.log({message})

executeThenGitAddCommitPush(message);
