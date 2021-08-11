/**
 * Return the length of a string in bytes.
 * @param {string} str 
 * @returns {number}
 * @example ByteSize('😀'); // 4
  ByteSize('Hello World'); // 11
 */
export default function (str: string) {
  return new Blob([str]).size;
}