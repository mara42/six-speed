var data = []
for (var i=0; i < 4000; i++) {
  data.push(2*i)
}
data[3999] = 8000
var target = 8000;

function fn() {
  return data.indexOf(target) !== -1;
}
assertEqual(fn(), true);

test(fn);
