var data = []
for (var i = 0, t = 4e4; i < t; i++) {
  data[i] = i * 2
}

function square(a) {
  return a * a
}

function fn() {
  var ret = 0;
  for (var value of data) {
    ret += value;
  }
  return ret;
}

assertEqual(fn(), 1599960000)

test(fn);
