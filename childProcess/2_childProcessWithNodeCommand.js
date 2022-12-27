"use strict";
const { execSync } = require("child_process");

const output = execSync(`node -e "console.log('subprocess created')"`);
console.log("-----> output sring", output.toString());
