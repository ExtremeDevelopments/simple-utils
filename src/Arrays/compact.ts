/**
 * Remove false values from an array
 * @param {Array<any>} arr Array of values
 * @returns {Array<any>} Array with removed falsey values
 * @example Compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
 */
export default function (arr: Array<any>) {
  return arr.filter(Boolean);
}