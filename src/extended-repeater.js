const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  function createStr(s, times = 1, separator = "+") {

    const string = '' + s || '';

    let arr = new Array(times).fill(string);
    arr.join(separator)

    return (arr.join(separator))
  }

  function createAddition(add, times = 1, separator = "|") {
    const addition = ""+ add|| "";

    if (typeof add =="undefined"){ times =0;}

    let arr = new Array(times).fill(addition);
    arr.join(separator)
    
    return (arr.join(separator))
  }




  // repeatTimes устанавливает число повторений str
  // separator это строка, разделяющая повторения str
  // addition это дополнительная строка, которая будет добавлена после каждого повторения str
  // additionRepeatTimes устанавливает число повторений addition
  // additionSeparator это строка, разделяющая повторения addition

  // console.log(createStr(str, options.repeatTimes, options.separator));
  // console.log(createStr(options.addition, options.additionRepeatTimes, options.additionSeparator));
  // console.log(createStr(str + createStr(options.addition, options.additionRepeatTimes, options.additionSeparator), options.repeatTimes, options.separator));
  return createStr(`${str}${createAddition(options.addition, options.additionRepeatTimes, options.additionSeparator)}`, options.repeatTimes, options.separator)

}

// console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }), 'la+sla+sla+');
// console.log(repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 }), 'LALA++sLALA++sLALA++');
// console.log(repeater('la', { repeatTimes: 3 }), 'la+la+la');
// console.log(repeater('single', { repeatTimes: 1 }), 'single');
// console.log(repeater('12345', { repeatTimes: 5 }), '12345+12345+12345+12345+12345');

// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }), 'need:TESTstrADD!');
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }), 'need:REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION');
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionSeparator: '222', additionRepeatTimes: 3 }), 'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION');
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, separator: '222', addition: 'ADDITION', additionRepeatTimes: 3 }), 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION');

// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }), 'need:nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');

// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }), 'need:truefalse!!!false??? truefalse!!!false??? truefalse!!!false');

// 
module.exports = {
  repeater
};
