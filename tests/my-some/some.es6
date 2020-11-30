var data = []
for (var i=0; i < 4000; i++) {
  data.push(2*i)
}
data[3999] = 8000

function is8000(a) {
  return a === 8000
}

function fn() {
  return data.some(is8000);
}

assertEqual(fn(), true);

test(fn);

