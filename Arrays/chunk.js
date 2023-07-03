const {isValidArray} = require('../input_validation');

function chunk(array, size = 1) {
  let res = [];

  if (typeof size != 'number') {
    if (!isNaN(Number(size))) {size = Number(size)} else return res;
  }
  if (size < 0) return res;
  if (!isValidArray(array)) return res;
  
  for (let i = 0; i < array.length; i += size) {
    let subArray = [];
    let length = i + size > array.length ? array.length : i + size;
    for (let j = i; j < length; j++) {
      subArray[subArray.length] = array[j];
    }
    res[res.length] = subArray;
  }
  return res;
}

module.exports = chunk;
 