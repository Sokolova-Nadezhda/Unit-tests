const drop = require('./drop');

test('implemented basic functionality', () => {
  expect(drop([1, 2, 3], 2)).toEqual([3]);
});

test('the method takes the default value if the second parameter is not set', () => {
  expect(drop([1, 2, 3])).toEqual([2, 3]);
});

test('the method returns an empty array if the second parameter exceeds the length of the array', () => {
  expect(drop([1, 2, 3], 5)).toEqual([]);
});

test('the method returns the original array if the second parameter is 0', () => {
  expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
});

test('the method returns an empty array if the array is null', () => {
  expect(drop(null, 2)).toEqual([]);
});

test('the method returns the original array if the second parameter is negative', () => {
  expect(drop([1, 2, 3], -2)).toEqual([1, 2, 3]);
});
