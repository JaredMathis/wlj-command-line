
const executeThen = require('./executeThen');
const gitAddCommitPush = require('./gitAddCommitPush');

module.exports = executeThenGitAddCommitPush;

function executeThenGitAddCommitPush(message) {
    executeThen(message, () => {
        gitAddCommitPush(message);
    })
}
