const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str == "") { return "" }
  {
    let arrResult = []
    let n = 1
    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i + 1]) { n = n + 1 }
      else {
        if (n == 1) {
          arrResult.push(str[i])
          n = 1
        } else {
          arrResult.push(n);
          arrResult.push(str[i])
          n = 1
        }
      }
    }
    return arrResult.join("")
  }
}

// console.log(encodeLine('aaaatttt'), '4a4t');
// console.log(encodeLine('aabbccc'), '2a2b3c');
// console.log(encodeLine('abbcca'), 'a2b2ca');
// console.log(encodeLine('xyz'), 'xyz');
// console.log(encodeLine(''), '');
module.exports = {
  encodeLine
};
