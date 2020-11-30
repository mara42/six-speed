var data = []
for (var i=0; i < 4000; i++) {
  data.push(2*i)
}

function isEven(a) {
  // using modulo to handle floats better
  return a % 2 === 0;
}

function fn() {
  return data.every(isEven);
}

assertEqual(fn(), true);

test(fn);
