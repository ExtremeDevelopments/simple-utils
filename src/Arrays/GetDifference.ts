/**
 * Get the difference between 2 arrays
 * @param {Array<any>} a Array one
 * @param {Array<any>} b Array two
 * @returns {Array<any>} Array values that are different
 */
export default function(a: Array<any>, b: Array<any>) {

  const set = new Set(b);

  const difference = a.filter(x => !set.has(x))

  return difference;
}