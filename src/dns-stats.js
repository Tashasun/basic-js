const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (domains.length == 0) { return {} }

  let helpArr = [];
  let result = {};
  let n = 1;

  for (let j = 0; j < domains.length; j++) {
    const arr = domains[j].split(".")
    let key = ''
    for (let i = arr.length - 1; i >= 0; i--) {
      key = key + '.' + arr[i];
      helpArr.push(key)
      // console.log('key=', key);
      // result[`${key}`] = 0;
    }
  }

  // console.log(result, helpArr);

  for (let i = 0; i < helpArr.length; i++) {

    // console.log(helpArr.reduce((n, el) => { if (el == helpArr[i]) { return n + 1 } else { return n } }, 0))
    result[`${helpArr[i]}`] = helpArr.reduce((n, el) => { if (el == helpArr[i]) { return n + 1 } else { return n } }, 0)
  }
  return result
}

// console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));
// console.log(getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 });
// console.log(getDNSStats(['epam.com', 'info.epam.com']), { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// console.log(getDNSStats([]), {});

module.exports = {
  getDNSStats
};
