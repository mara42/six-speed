var data = [2, 2 * 10, 2 * 4, 2 * 90, 2 * 2001];

function fn() {
  var target = 2 * 90;
  return data.indexOf(target) !== -1;
}
assertEqual(fn(), true);

test(fn);
