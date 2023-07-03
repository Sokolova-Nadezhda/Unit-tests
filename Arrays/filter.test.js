const filter = require('./filter');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred',  age: 40, active: false },
  { user: 'travis', age: 37, active: true}
];

test('implemented basic functionality', () => {
  let predicate = function(o) { 
    return !o.active; 
  };
  let res = [
    { user: 'fred',  age: 40, active: false }
  ];

  expect(filter(users, predicate)).toEqual(res);
});

test('the method returns the original array if the predicate is not set', () => {
  let predicate;
  let res = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred',  age: 40, active: false },
    { user: 'travis', age: 37, active: true}
  ];

  expect(filter(users, predicate)).toEqual(res);
});

test('the method returns an empty array in case the original array is null', () => {
  let predicate = function(o) { 
    return !o.active; 
  };
  let res = [];

  expect(filter(null, predicate)).toEqual(res);
});
