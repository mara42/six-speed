var data = {}
for (var i = 0, t = 4e4; i < t; i++) {
  data[i.toString(16)] = i * 2
}

function square(a) {
  return a * a
}
data[Symbol.iterator] = function() {
   var array = Object.keys(data),
       nextIndex = 0;

   return {
     next: function() {
        return nextIndex < array.length ?
          {value: data[array[nextIndex++]], done: false} :
          {done: true};
     }
   };
 };

function fn() {
  var ret = 0;
  for (var value of data) {
    ret += value;
  }
  return ret;
}

assertEqual(fn(), 1599960000)
test(fn);
