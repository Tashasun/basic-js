const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    if (!Array.isArray(arr)) return 0; 
    
    // let max = 0;
    // for (let i = 0; i <= arr.length; i++) {
    //   let e = this.calculateDepth(arr[i])
    //   max = (e>max)? e : max;
    //   console.log(i,'e=',e,arr,"max=",max)
    // }
    let r = arr.map( x => this.calculateDepth(x)).reduce((s,x)=> (s>x)?s:x,0);
    // console.log(arr,r+1)
    return r+1;

  }
}

const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, [4, 5, 8], 3, 5]), 2)
// console.log(depthCalc.calculateDepth([1, [4, 5, 8, [2,[0,[9,0]]], 3, 4, 5]]), 5)

// const assert = {equal: console.log};

// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);

module.exports = {
  DepthCalculator
};

