const { exec } = require("child_process");

const message = process.argv.slice(2).join(" ");
//console.log({message})

executeThen(message, () => {
    gitAddCommitPush(message);
})

function gitAddCommitPush(message) {
    const commands = [
        'git add -A',
        'git commit -m "' + message + "\"",
        'git push -u',
    ]
    
    executeAll(commands);
}

function executeAll(commands) {
    executeThen(commands[0], () => {
        commands.splice(0, 1);
        if (commands.length) {
            executeAll(commands);
        }
    })
}

function executeThen(command, then) {
    console.log('Executing: ' + command)
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        if (stdout) {
            console.log(stdout);
        }
        
        then();
    });
}