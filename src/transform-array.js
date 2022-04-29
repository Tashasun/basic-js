const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!"); }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    try {
      if (typeof arr[i] == "string") {
        switch (arr[i]) {
          case "--discard-next":
            i = i + 1;
            break;
          case "--discard-prev":
            newArr = newArr.splice(0, i - 1);
            break;

          case "--double-next":
            if (arr[i + 1]) {
              newArr.push(arr[i + 1])
            }
            break;
          case "--double-prev":
            if (arr[i - 1] || arr[i - 2]) {
              if (arr[i - 2] == "--discard-next") {
                break
              }
              else {
                newArr.push(arr[i - 1]);
                break;
              }
            }
            else {
              i++;
            }
          default: newArr.push(arr[i]);
        }
      }
      else { newArr.push(arr[i]) }
    }
    catch (error) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
  }
  return newArr
}

// console.log(transform(['--discard-prev', 1, 2, 3]), "'--discard-prev'")
// console.log(transform(['--double-prev', 1, 2, 3]), "'--double-prev'")
// console.log(transform([1, 2, 3, '--double-next']), "'--double-next'")
// console.log(transform([1, 2, 3, '--discard-next']), "'--discard-next'")


module.exports = {
  transform
};
