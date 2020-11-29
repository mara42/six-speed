var data = [2, 2 * 10 + 1, 2 * 4 + 1, 2 * 90, 2 * 2001];

function isEven(a) {
  // using modulo to handle floats better
  return a % 2 === 0;
}

function fn() {
  var res = data.filter(isEven);
  return res.length;
}

assertEqual(fn(), 3);

test(fn);
