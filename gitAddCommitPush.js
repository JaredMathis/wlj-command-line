const executeAll = require("./executeAll");

module.exports = gitAddCommitPush;

function gitAddCommitPush(message) {
    const commands = [
        'git add -A',
        'git commit -m "' + message + "\"",
        'git push -u',
    ]
    
    executeAll(commands);
}