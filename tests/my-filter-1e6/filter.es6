var data = []
var n = 1e6
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
for (var i=0; i < n; i++) {
  data.push(i)
}
shuffle(data)


function isEven(a) {
  // using modulo to handle floats better
  return a % 2 === 0;
}

function fn() {
  var res = data.filter(isEven);
  return res.length;
}

assertEqual(fn(), n/2);

test(fn);
