const {isValidObject} = require('../input_validation');

function toPairs(object) {
  const res = [];

  if (!isValidObject(object)) return res;

  object.__proto__ = {};

  for (let key in object) {
    const array = [];
    array[array.length] = key;
    array[array.length] = object[key];
    res[res.length] = array;
  }
  
  return res;
}

module.exports = toPairs;
