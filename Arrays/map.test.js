const map = require('./map');

function square(n) {
  return n * n;
}

test('implemented basic functionality', () => {
  expect(map([4, 8], square)).toEqual([16, 64]);
});

test('the method returns the original array if the iteratee is not set', () => {
  expect(map([4, 8])).toEqual([4, 8]);
});

test('the method returns an empty array if the original array is null', () => {
  expect(map(null, square)).toEqual([]);
});

test('the method returns an empty array if the original array is empty', () => {
  expect(map([], square)).toEqual([]);
});
