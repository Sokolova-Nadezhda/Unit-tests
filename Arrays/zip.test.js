const zip = require('./zip');

test('implemented basic functionality', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
});

test('the method creates an array with an undefined value if the arrays have different lengths', () => {
  expect(zip(['a', 'b', 'c'], [1, 2])).toEqual([['a', 1], ['b', 2], ['c', undefined]]);
});

test('the method creates an array with an undefined value if one of the arrays is empty', () => {
  expect(zip([], [1, 2])).toEqual([[undefined, 1], [undefined, 2]]);
});

test('the method splits the array into arrays with a length of one element if the second array is not specified', () => {
  expect(zip([1, 2])).toEqual([[1], [2]]);
});

test('the method returns an empty array if the input is null', () => {
  expect(zip(null)).toEqual([]);
});
