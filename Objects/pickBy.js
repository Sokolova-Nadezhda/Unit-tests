const {isValidObject} = require('../input_validation');

function pickBy(object, predicate) {
  let res = {};

  if (!isValidObject(object)) return res;
  if (!predicate) return object;

  for (let key in object) {
    if (predicate(object[key])) {
      res[`${key}`] = object[key];
    }
  }
  return res;
}

module.exports = pickBy;
