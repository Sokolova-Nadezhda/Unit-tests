const dropWhile = require('./dropWhile');

const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

test('implemented basic functionality', () => {
  let predicate = function(o) { 
    return !o.active; 
  };
  let res = [
    { 'user': 'pebbles', 'active': true }
  ];

  expect(dropWhile(users, predicate)).toEqual(res);
});

test('the method returns an empty array if the predicate is not set', () => {
  let predicate;
  let res = [];
 
  expect(dropWhile(users, predicate)).toEqual(res);
});

test('the method returns an empty array in case the original array is null', () => {
  let predicate = function(o) { 
    return !o.active; 
  };
  let res = [];

  expect(dropWhile(null, predicate)).toEqual(res);
});
