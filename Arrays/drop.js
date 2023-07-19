const {isValidArray} = require('../input_validation');

function drop(array, n = 1) {
  const res = [];

  if (!isValidArray(array)) return res;

  for (let indexN = n - 1; indexN >= 0; indexN --) {
    delete array[indexN];
  }

  for (let i = 0; i < array.length; i ++) {
    if (array[i]) {
      res[res.length] = array[i];
    }
  }
  return res;
}

module.exports = drop;
