const {isValidObject} = require('../input_validation');

function omitBy(object, predicate) {
  let res = {};

  if (!isValidObject(object)) return res;
  if (!predicate) return res;

  for (let key in object) {
    if (!predicate(object[key])) {
      res[`${key}`] = object[key];
    }
  }
  return res;
}

module.exports = omitBy;
