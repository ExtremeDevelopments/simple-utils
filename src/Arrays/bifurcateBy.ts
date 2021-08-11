/**
 * 
 * @param {Array<any>} arr 
 * @param fn 
 * @example bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
  // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
export default function (arr: Array<any>, fn) {
  return arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
}