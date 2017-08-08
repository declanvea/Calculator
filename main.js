function num(fn) {
  return function (x, y) {
    return fn(Number(x), Number(y));
  }
}

let add = num(function(x, y) {
  return x + y;
});
let sub = num(function(x, y) {
  return x - y;
});
let mult = num(function(x, y) {
  return x * y;
});
let divide = num(function(x, y) {
  return x / y;
});
