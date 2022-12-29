const { execSync } = require("child_process");

console.log("---process.execPath : ", process.execPath)
execSync(
  `"${process.execPath}" -e "console.error('error from child process')"`
);
