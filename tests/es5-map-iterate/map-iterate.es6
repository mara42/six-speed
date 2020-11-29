// var data = [1,2,3];
// generate array of 4000 random numbers
var data = [];

for (var i = 0, t = 4000; i < t; i++) {
  data.push(Math.round(Math.random() * t));
}

function square(a) {
  return a * a;
}

function fn() {
  var newData = data.map(square);
  return newData.length;
}

assertEqual(fn(), 4000);

test(fn);
