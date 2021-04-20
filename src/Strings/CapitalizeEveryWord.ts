/**
 * Capitalize every word in a string
 * @param {string} str String to change
 * @example capitalizeEveryWord("hi how are you") //Hi How Are You
 */
export default function (str: string) {
  return str.replace(/\b[a-z]/g, char => char.toUpperCase());
}