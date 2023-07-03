const {isValidArray} = require('../input_validation');

function zip(...args) {
  let res = [];
  
  if (!isValidArray(...args)) return res;

  let length = 0;
  for (let i = 0; i < args.length; i ++) {
    if (args[i].length > length) length = args[i].length;
  }
  
  for (let i = 0; i < length; i ++) {
    let newArr = [];
    let count = 0;
    for (let j = 0; j < args.length; j ++) {
      let array = args[j];
      newArr[newArr.length] = array[i];
    } 
    res[res.length] = newArr;
    newArr = [];
    count ++;
  }
  
  return res;
}

module.exports = zip;
 