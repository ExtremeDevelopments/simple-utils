/**
 * Returns true if the predicate function returns true for all elements in a collection and false otherwise. 
 * You can omit the second argument fn if you want to use Boolean as a default value
 * @param {Array<any>} arr 
 * @param fn
 * @example All([4, 2, 3], x => x > 1); //true
 * @example All([1, 1, 1, 1]); //true
 */
export default function(arr: Array<any>, fn = Boolean) {
  return arr.every(fn)
}