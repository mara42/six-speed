var data = []
var n = 4e4
for (var i=0; i < n; i++) {
  data.push(2*i)
}
data[3999] = n*2
var target = n*2

function is8000(a) {
  return a === target
}

function fn() {
  return data.some(is8000);
}

assertEqual(fn(), true);

test(fn);

