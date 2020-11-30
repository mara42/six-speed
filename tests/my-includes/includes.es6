var data = []
for (var i=0; i < 4000; i++) {
  data.push(2*i)
}
data[3999] = 8000
var target = 8000

function fn() {
  return data.includes(target);
}

assertEqual(fn(), true);

test(fn);
