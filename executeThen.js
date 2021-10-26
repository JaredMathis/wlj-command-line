const { exec } = require("child_process");

module.exports = executeThen;

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