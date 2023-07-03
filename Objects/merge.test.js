const merge = require('./merge');

test('implemented basic functionality', () => {
  let object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
   
  let other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };

  res = { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] };

  expect(merge(object, other)).toEqual(res);
});

test('the method returns an empty object if the original object is null', () => {
   
  let other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };

  res = {};

  expect(merge(null, other)).toEqual(res);
});

test('the method returns the original object if the second parameter is missing', () => {
  let object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };

  res = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };

  expect(merge(object)).toEqual(res);
});

test('the method returns an empty object if the input object is empty', () => {
  let object = {};
   
  let other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };

  res = {};

  expect(merge(object, other)).toEqual(res);
});
