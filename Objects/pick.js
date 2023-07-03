const {isValidObject} = require('../input_validation');

function pick(object, ...paths) {
  let res = {};
  
  if (!isValidObject(object)) return res;
  for (let i = 0; i < paths.length; i ++) {
    for (let key in object) {
      if (key === paths[i]) {
        res[`${key}`] = object[key];
      }
    }
  }
  
  return res;
}

module.exports = pick;
