Error.stackTraceLimit = 201;
function fn(n = 200) {
  if (n === 0) throw Error();
  fn(n - 1);
}
fn();
throw new Error('feo')