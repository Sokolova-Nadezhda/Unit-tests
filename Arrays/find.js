const {isValidArray} = require('../input_validation');

function find(array, predicate, fromIndex = 0) {
  let res = {};

  if (!isValidArray(array)) return res;
  if (!predicate) res = array[0];
  if ((typeof predicate) === 'function') { 
    if (fromIndex >= 0) {
      for (let i = fromIndex; i < array.length; i ++) {
        if (predicate(array[i])) {
          res = array[i];
          break;
        }
      }
    } else {
      for (let i = array.length + fromIndex; i >= 0; i --) {
        if (predicate(array[i])) {
          res = array[i];
          break;
        }
      }
    }
  }
  return res;
}

module.exports = find;
