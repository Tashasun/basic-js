const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let turns =0;
let seconds = 0;
turns = Math.pow(2, disksNumber) -1;
seconds = Math.floor((turns*3600)/turnsSpeed);
let result ={turns: turns, seconds: seconds};
return result;
}

// console.log(calculateHanoi(34, 4005), { turns: 17179869183, seconds: 15442579040 });

module.exports = {
  calculateHanoi
};
