var data = [1, 2, 3, 4, 5];

function sum(a, b) {
  return a + b;
}

function fn() {
  return data.reduce(sum, 0);
}

assertEqual(fn(), 15);

test(fn);
