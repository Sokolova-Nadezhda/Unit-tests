const omitBy = require('./omitBy');

function valueIsNumber(value) {
  return (typeof value === 'number') ? true : false;
}

test('implemented basic functionality', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = { 'b': '2' };

  expect(omitBy(object, valueIsNumber)).toEqual(res);
});

test('the method returns an empty object if the original object is null', () => {
  res = {};

  expect(omitBy(null, valueIsNumber)).toEqual(res);
});

test('the method returns an empty object if the predicate is not set', () => {
  let object = { 'a': 1, 'b': '2', 'c': 3 };

  res = {};

  expect(omitBy(object)).toEqual(res);
});

test('the method returns an empty object if the original object is empty', () => {
  let object = {};

  res = {};

  expect(omitBy(object)).toEqual(res);
});
