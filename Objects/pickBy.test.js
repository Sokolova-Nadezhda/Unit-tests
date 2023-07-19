const pickBy = require('./pickBy');

function valueIsNumber(value) {
  return (typeof value === 'number') ? true : false;
}

test('implemented basic functionality', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = { 'a': 1, 'c': 3 };

  expect(pickBy(object, valueIsNumber)).toEqual(res);
});

test('the method returns an empty object if the original object is empty', () => {
  let object = {};

  res = {};

  expect(pickBy(object, valueIsNumber)).toEqual(res);
});

test('the method returns an empty object if the original object is null', () => {
  let object = null;

  res = {};

  expect(pickBy(object, valueIsNumber)).toEqual(res);
});

test('the method returns the original object if the predicate is not set', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = { 'a': 1, 'b': '2', 'c': 3 };

  expect(pickBy(object)).toEqual(res);
});
