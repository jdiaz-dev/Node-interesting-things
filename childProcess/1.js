const { fork } = require("child_process");

//fork method need path to .js file that will be executed as subprocess
var sp1 = fork("subprocess1.js"); //creating first subprocess

var sp2 = fork("subprocess2.js"); //creating second subprocess
sp2.send({ msg: "Hi from parent process" }); //sending message to second subprocess
