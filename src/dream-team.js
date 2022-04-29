const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let Array =[];
  if (!members) {return false}
  for (let i=0; i<members.length; i++){
    if (typeof(members[i]) == "string"){
      members[i] = members[i].trim();
    Array.push(members[i][0].toUpperCase());
 
}
}

if (Array.sort().join('') == "") {return false}
return Array.sort().join('')

}
// console.log(createDreamTeam([
//   'Amelia',
//   'Grace',
//   'Lily',
//   'Ruby',
// ]), 'AGLR')

module.exports = {
  createDreamTeam
};
