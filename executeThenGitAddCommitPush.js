
const executeThen = require('./executeThen');
const executeThenGitAddCommitPushThen = require('./executeThenGitAddCommitPushThen');
const gitAddCommitPush = require('./gitAddCommitPush');

module.exports = executeThenGitAddCommitPush;

function executeThenGitAddCommitPush(message) {
    executeThenGitAddCommitPushThen(message, () => {})
}
