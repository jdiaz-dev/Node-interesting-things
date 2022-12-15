const { promisify } = require("util");

const timer = (time, value, callback) => {
  setTimeout(() => {
    console.log(value);
    callback();
  }, time);
};

const timerA = promisify(timer.bind(null, 500, "a"));
const timerB = promisify(timer.bind(null, 250, "b"));
const timerC = promisify(timer.bind(null, 100, "c"));

async function run() {
  try {
    //serial execution
    await timerA();
    await timerB();
    await timerC();
  } catch (err) {
    console.log(err);
  }
}

run();
/* 
  output:
    a
    b
    c
*/