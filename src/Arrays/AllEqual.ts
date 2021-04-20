/**
 * Check wether all elements of an array are equal.
 * @param {Array<any>} arr 
 * @returns {Boolean}
 */

export default function(arr: Array<any>) {
  return arr.every(value => value === arr[0]);
}