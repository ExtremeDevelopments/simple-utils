/**
 * Check if a string is a valid JSON.
 * @param {string} str
 * @returns {boolean}
 */
export default function(str: string) {
  try {
    JSON.parse(str)
    return true;
  } catch (e) {
    return false;
  }
}