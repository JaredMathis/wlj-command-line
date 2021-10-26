const executeThen = require("./executeThen");

module.exports = executeAll;
function executeAll(commands, then) {
    executeThen(commands[0], () => {
        commands.splice(0, 1);
        if (commands.length) {
            executeAll(commands);
        } else {
            then();
        }
    })
}