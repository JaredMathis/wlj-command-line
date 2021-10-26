const executeThen = require("./executeThen");

module.exports = executeAll;
function executeAll(commands) {
    executeThen(commands[0], () => {
        commands.splice(0, 1);
        if (commands.length) {
            executeAll(commands);
        }
    })
}