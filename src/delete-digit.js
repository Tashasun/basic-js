const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrN = n.toString().split("");
  let max = 0;

  // console.log(arrN)
  for (let i = 0; i < arrN.length; i++) {
    let elem = arrN[i]
    arrN.splice(i, 1);
    Number(arrN.join(""))
    if (max < Number(arrN.join(""))) {
      max = Number(arrN.join(""));
    }

    // console.log(arrN, Number(arrN.join("")))
    arrN.splice(i, 0, elem)
    // console.log(arrN)
  }
  return max


}
// console.log(deleteDigit(152), 52);
// console.log(deleteDigit(1001), 101);
// console.log(deleteDigit(10), 1);
// console.log(deleteDigit(222219), 22229);
// console.log(deleteDigit(109), 19);
// console.log(deleteDigit(342), 42);

module.exports = {
  deleteDigit
};
