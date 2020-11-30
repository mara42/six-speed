var data = [];
for (var i=0, t=4000; i<t; i++) {
    data.push(i)
}

function sum(a, b) {
  return a + b;
}

function fn() {
  return data.reduce(sum, 0);
}

assertEqual(fn(), 7998000);

test(fn);
