const {isValidArray} = require('../input_validation');

function filter(array, predicate) {
  const res = [];

  if (!isValidArray(array)) return res;
  if ((typeof predicate) === 'function') { 
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        res[res.length] = array[i];
      }
    }
  }
  if (!predicate) res = array;
  return res;
}

module.exports = filter;
