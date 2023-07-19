const omit = require('./omit');

test('implemented basic functionality', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = { 'b': '2' };

  expect(omit(object, 'a', 'c')).toEqual(res);
});

test('the method works correctly when specifying a key that does not exist in the object', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = { 'b': '2' };

  expect(omit(object, 'a', 'c', 'd')).toEqual(res);
});

test('the method returns an empty object if the original object is null', () => {
  res = {};

  expect(omit(null, 'a', 'c')).toEqual(res);
});

test('the method returns the original object if paths are not set', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = { 'a': 1, 'b': '2', 'c': 3 };

  expect(omit(object)).toEqual(res);
});
