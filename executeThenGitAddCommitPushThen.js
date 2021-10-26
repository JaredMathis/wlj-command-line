const executeThen = require('./executeThen');
const gitAddCommitPush = require('./gitAddCommitPush');

module.exports = executeThenGitAddCommitPushThen;

function executeThenGitAddCommitPushThen(message, then) {
    executeThen(message, () => {
        gitAddCommitPush(message, then);
    })
}
