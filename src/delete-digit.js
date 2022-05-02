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
 function deleteDigit( n ) {
  let arr = n.toString().split('').sort();
  let max = arr[arr.length -1];
  let min = arr[0];
  let result = (n.toString().split('').indexOf(max) > 0)?n.toString().split('').indexOf(max) - 1:n.toString().split('').indexOf(min);
  
  return (+(n.toString().replace(n.toString().split('')[result] , '')));
}


module.exports = {
  deleteDigit
};
