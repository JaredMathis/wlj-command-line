const executeThen = require("./executeThen");

module.exports = executeAll;
function executeAll(commands, then) {
    console.log('executeAll');
    executeThen(commands[0], () => {
        console.log('here', {commands})
        commands.splice(0, 1);
        if (commands.length) {
            executeAll(commands);
        } else {
            then();
        }
    })
}