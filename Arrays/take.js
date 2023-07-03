const {isValidArray} = require('../input_validation');

function take(array, n = 1) {
  let res = [];

  if (!isValidArray(array)) return res;
  
  if (array.length < n) n = array.length;
  for (let i = 0; i < n; i ++) {
    res[res.length] = array[i];
  }
  
  return res;
}

module.exports = take;
 