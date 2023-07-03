const take = require('./take');

test('implemented basic functionality', () => {
  expect(take([1, 2, 3], 2)).toEqual([1, 2]);
});

test('the second parameter is set by default if it is not set', () => {
  expect(take([1, 2, 3])).toEqual([1]);
});

test('the method returns the original array if the second parameter exceeds the length of the original array', () => {
  expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
});

test('the method returns an empty array if the second parameter is 0', () => {
  expect(take([1, 2, 3], 0)).toEqual([]);
});

test('the method returns an empty array if the second parameter is negative', () => {
  expect(take([1, 2, 3], -2)).toEqual([]);
});

test('the method returns an empty array if the original array is null', () => {
  expect(take(null, 2)).toEqual([]);
});
