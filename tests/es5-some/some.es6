var data = [2 + 1, 2 * 10 + 1, 2 * 4 + 1, 2 * 90, 2 * 2001];

function isEven(a) {
  // using modulo to handle floats better
  return a % 2 === 0;
}

function fn() {
  return data.some(isEven);
}

assertEqual(fn(), true);

test(fn);
