const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let Number = 0;
  if (typeof sampleActivity !== "string") return false;
  if (isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  }
  {Number = Math.ceil(Math.log((15/sampleActivity))*5730/(693/1000))}
  return Number;
}

// console.log(dateSample('one'), false);
// console.log(dateSample('3'), 13305);
// console.log(dateSample('1'), 22387);
module.exports = {
  dateSample
};
