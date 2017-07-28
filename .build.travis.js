var sys = require('sys')
var exec = require('child_process').exec;
var child;
child = exec("pwd", function(error, stdout, stderr) {
    sys.print('stdout: ' + stdout);
    sys.print('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("wget -qO- http://ipecho.net/plain ; echo", puts);