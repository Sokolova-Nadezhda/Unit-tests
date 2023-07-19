const {isValidArray} = require('../input_validation');

function includes(array, value, fromIndex = 0) {
  const res = false;

  if (!isValidArray(array)) return res;

  for (let i = fromIndex; i < array.length; i ++) {
    if (array[i] === value) res = true;
  }
  
  return res;
}

module.exports = includes;
