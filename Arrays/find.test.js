const find = require('./find');

const users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

test('implemented basic functionality', () => {
  let predicate = function(o) { 
    return o.age < 40; 
  };
  let res = { 'user': 'barney',  'age': 36, 'active': true };

  expect(find(users, predicate)).toEqual(res);
});

test('the method works correctly for the given index', () => {
  let predicate = function(o) { 
    return o.age < 40; 
  };
  let res = { 'user': 'pebbles', 'age': 1,  'active': true };

  expect(find(users, predicate, 1)).toEqual(res);
});

test('the method returns an empty object when the index is greater than the number of objects', () => {
  let predicate = function(o) { 
    return o.age < 40; 
  };
  let res = {};

  expect(find(users, predicate, 5)).toEqual(res);
});

test('the method starts counting from the end at a negative index', () => {
  let predicate = function(o) { 
    return o.age < 40; 
  };
  let res = { 'user': 'pebbles', 'age': 1,  'active': true };

  expect(find(users, predicate, -1)).toEqual(res);
});

test('the method returns the first object if the predicate is not set', () => {
  let res = { 'user': 'barney',  'age': 36, 'active': true };

  expect(find(users)).toEqual(res);
});

test('the method returns an empty array in case the original array is null', () => {
  let predicate = function(o) { 
    return o.age < 40; 
  };
  let res = {};

  expect(find(null, predicate)).toEqual(res);
});
