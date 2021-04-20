
/**
 * Compare to see if the first object has the same properties as the second.
 * @param {Object} obj Object 1
 * @param {Object} objtwo Object 2
 * @returns {boolean}
 */
export default function(obj: Object, objtwo: Object) {
  return Object.keys(objtwo).every(key => obj.hasOwnProperty(key) && obj[key] === objtwo[key]);
}