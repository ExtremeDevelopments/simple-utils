/**
 * splits values into two groups and then puts a truthy element of filter in the first group, and in the second group otherwise.
 * @param {Array<any>} arr Array of values
 * @param {Array<any>} filter Array filter
 * @example Bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
  // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
export default function(arr:Array<any>, filter:Array<any>) {
  return arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
}