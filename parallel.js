const timer = (time, value) => {
  setTimeout(() => {
    console.log(value);
  }, time);
};

//parallel execution
timer(500, "a");
timer(250, "b");
timer(100, "c");

/* 
  output:
    c
    b
    a
*/
