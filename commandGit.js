
const executeThen = require('./executeThen');
const gitAddCommitPush = require('./gitAddCommitPush');

const message = process.argv.slice(2).join(" ");
//console.log({message})

executeThen(message, () => {
    gitAddCommitPush(message);
})
