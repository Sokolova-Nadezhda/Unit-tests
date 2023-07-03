const compact = require('./compact');

test('implemented basic functionality', () => {
  expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
});

test('the method returns an empty array if the input is an empty array', () => {
  expect(compact([])).toEqual([]);
});

test('the method returns an empty array if the input is null', () => {
  expect(compact(null)).toEqual([]);
});

test('the method returns an empty array if all elements of the array are false', () => {
  expect(compact(['', 0, false])).toEqual([]);
});
