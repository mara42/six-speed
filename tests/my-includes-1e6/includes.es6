var data = []
var n = 1e6
for (var i=0; i < n; i++) {
  data.push(2*i)
}
data[3999] = n*2
var target = n*2

function fn() {
  return data.includes(target);
}

assertEqual(fn(), true);

test(fn);
