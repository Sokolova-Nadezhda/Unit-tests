const pick = require('./pick');

test('implemented basic functionality', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = { 'a': 1, 'c': 3 };

  expect(pick(object, 'a', 'c')).toEqual(res);
});

test('the method returns an empty object if the original object is null', () => {
  res = {};

  expect(pick(null, 'a', 'c')).toEqual(res);
});

test('method ignores non-string keys', () => {
  let object = { 1: 1, 'b': '2', 'c': 3 };

  res = {'c': 3 };

  expect(pick(object, 1, 'c')).toEqual(res);
});

test('the method returns empty object if paths are not set', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = {};

  expect(pick(object)).toEqual(res);
});
