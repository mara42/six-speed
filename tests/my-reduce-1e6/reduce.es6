var data = [];
for (var i=0, t=1e6; i<t; i++) {
    data.push(i)
}

function sum(a, b) {
  return a + b;
}

function fn() {
  return data.reduce(sum, 0);
}

assertEqual(fn(), 499999500000)

test(fn);
