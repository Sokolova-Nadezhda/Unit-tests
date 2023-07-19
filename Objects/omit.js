const {isValidObject} = require('../input_validation');

function omit(object, ...paths) {
  const res = {};
  
  if (!isValidObject(object)) return res;
  
  for (let key in object) {
    let isNotMatches = true;
    for (let i = 0; i < paths.length; i ++) {
      if (paths[i] === key) {
        isNotMatches = false;
      }
    }
    if (isNotMatches) res[`${key}`] = object[key];
  }
  
  return res;
}

module.exports = omit;
