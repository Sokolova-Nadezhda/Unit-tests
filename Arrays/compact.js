const {isValidArray} = require('../input_validation');

function compact(array) {
  let res = [];

  if (!isValidArray(array)) return res;

  for (let i = 0; i < array.length; i ++) {
    if (array[i] != false) {
      res[res.length] = array[i];
    }
  }
  return res;
}

module.exports = compact;
