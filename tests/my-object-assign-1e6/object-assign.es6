const obj = {
  a: 1,
  b: true,
  c: function () {},
  d: null,
  e: 'e'
};
var n = 1e6

for (var i = 0; i < n; i++) {
  obj[i.toString(16)] = i
}

const fn = function (src) {
  return Object.assign({}, src);
};

const r = fn(obj);
assertEqual(r.a, obj.a);
assertEqual(r.b, obj.b);
assertEqual(r.c, obj.c);
assertEqual(r.d, obj.d);
assertEqual(r.e, obj.e);

test(function () {
  fn(obj);
});
