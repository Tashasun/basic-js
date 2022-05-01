const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplemenе('Not implemented');
  // remove line with error and write your code 
  let str1arr = [];
  let str2arr = [];
  str1arr = s1.split("");
  str2arr = s2.split("");
  let count = 0;
  for (let i = 0; i < str1arr.length; i++) {

    if (str2arr.indexOf(str1arr[i]) >= 0) {

      str2arr.splice(str2arr.indexOf(str1arr[i]), 1)
      count++
    }
  }

  // console.log(str1arr, str2arr)
  return count
}


// console.log(getCommonCharacterCount('aabcc', 'adcaa'), 3);
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'), 4);
// console.log(getCommonCharacterCount('abca', 'xyzbac'), 3);
// console.log(getCommonCharacterCount('', 'abc'), 0);
// console.log(getCommonCharacterCount('a', 'b'), 0);

module.exports = {
  getCommonCharacterCount
};
