const {isValidArray} = require('../input_validation');

function map(array, iteratee) {
  const res = [];

  if (!isValidArray(array)) return res;
  if (!iteratee) return array;
  for (let i = 0; i < array.length; i ++) {
    res[res.length] = iteratee(array[i]);
  }
  
  return res;
}

module.exports = map;
