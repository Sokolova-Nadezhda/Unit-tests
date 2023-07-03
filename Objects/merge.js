const {isValidObject} = require('../input_validation');
function merge(object, ...sources) {
  
  if (!isValidObject(object)) return res;

  for (keyObject in object) {
    let arrayObject = object[keyObject];
    for (let i = 0; i < arrayObject.length; i ++) {
      for (let j = 0; j < sources.length; j ++) {
        for (keySources in sources[j]) {
          let sourcesObject = sources[j][keySources];
          for (let k = 0; k < sourcesObject.length; k ++) {
            if (i === k) {
              for (let keyIn in sourcesObject[k]) {
                arrayObject[i][`${keyIn}`] = sourcesObject[k][keyIn]
              }
            }
          }
        }
      }
    }
  }
  return object;
}

module.exports = merge;
