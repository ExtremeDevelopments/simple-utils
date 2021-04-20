/**
 * Convert an Array into CSV format for further use.
 * @param {Array<any>} arr Array of elements to convert to CSV
 * @param {string} delimiter Character to divide variables in CSV form. Defaulted to "," 
 * @returns {string} CSV formatted values from array given.
 */
export default function (arr: Array<any>, delimiter = ',') {
  return arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join(`\n`)
}