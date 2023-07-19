const toPairs = require('./toPairs');

function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;

test('implemented basic functionality', () => {
  
  res = [['a', 1], ['b', 2]];

  expect(toPairs(new Foo)).toEqual(res);
});

test('the method returns an empty array if the original array is null', () => {
  res = [];

  expect(toPairs(null)).toEqual(res);
});

test('the method returns an empty array if the input is a number', () => {
  res = [];

  expect(toPairs(1)).toEqual(res);
});
