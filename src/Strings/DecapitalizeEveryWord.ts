/**
 * Uncapitalize every word in a string
 * @param {string} str String to change
 * @example capitalizeEveryWord("Hi How Are You") //Hi how are you
 */
export default function (str: string) {
  return str.replace(/\b[A-Z]/g, char => char.toLowerCase());
}