var data = [2, 2 * 10, 2 * 4, 2 * 90, 2 * 2001];

function isEven(a) {
  // using modulo to handle floats better
  return a % 2 === 0;
}

function fn() {
  return data.every(isEven);
}

assertEqual(fn(), true);

test(fn);
