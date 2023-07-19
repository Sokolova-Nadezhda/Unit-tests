function isValidArray(inputValue) {
  return inputValue instanceof Array ? true : false;
}

function isValidObject(inputValue) {
  let res = false;
  if (inputValue === null) return res;
  if (typeof inputValue === 'object') res = true;
  return res;
}

module.exports = {isValidArray, isValidObject};
