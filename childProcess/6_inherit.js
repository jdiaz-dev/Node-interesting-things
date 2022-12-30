"use strict";
const { spawn } = require("child_process");

const sp = spawn(
  process.execPath,
  ["-e", `process.stdin.pipe(process.stdout)`],
  {
    stdio: ["pipe", "inherit", "ignore"],
  }
);

sp.stdin.write("message from parent process\n"); 
sp.stdin.end();
process.stdout