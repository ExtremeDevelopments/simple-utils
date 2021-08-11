/**
 * Assigns default values for all properties in an object that are undefined.
 * @param {Object} obj 
 * @param  {...any} defs 
 * @returns default Values
 * @example assignDefaultValues({ a: 52 }, { b: 69 }, { b: 6 }, { a: 3 }); // { a: 52, b: 69 }
 */
export default function(obj: Object, ...defs: any) {
  let defaultValues = Object.assign({}, obj, ...defs.reverse(), obj);
  return defaultValues;
}