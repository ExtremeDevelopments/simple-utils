/**
 * Capitalize first letter of a string
 * @param {string} first 
 * @param {Array<any>} rest 
 * @example Capitalize('fooBar'); // 'FooBar'
  Capitalize('fooBar', true); // 'FooBar'
 */
export default function (first:string, ...rest: Array<any>) {
  first.toUpperCase() + rest.join('');
}