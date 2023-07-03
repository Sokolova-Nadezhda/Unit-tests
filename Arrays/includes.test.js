const includes = require('./includes');

test('implemented basic functionality', () => {
  expect(includes([1, 2, 3], 1)).toEqual(true);
});

test('method returns false when looking for a non-existent value', () => {
  expect(includes([1, 2, 3], 5)).toEqual(false);
});

test('the method works correctly for the given index', () => {
  expect(includes([1, 2, 3], 3, 1)).toEqual(true);
});

test('the method works from the end of the array with a negative index', () => {
  expect(includes([1, 2, 3], 3, -1)).toEqual(true);
});

test('the method returns false if the index is greater than the number of elements', () => {
  expect(includes([1, 2, 3], 3, 5)).toEqual(false);
});

test('the method returns false if the input is an empty array', () => {
  expect(includes([], 1)).toEqual(false);
});

test('the method returns false if the input is null', () => {
  expect(includes(null, 1)).toEqual(false);
});

test('the method returns false if the value is not set', () => {
  expect(includes([1, 2, 3])).toEqual(false);
});
