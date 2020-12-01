var data = [];

for (var i = 0, t = 1e6; i < t; i++) {
  data.push(Math.round(Math.random() * t));
}

function square(a) {
  return a * a;
}

function fn() {
  var newData = data.map(square);
  return newData.length;
}

assertEqual(fn(), 1e6);

test(fn);
