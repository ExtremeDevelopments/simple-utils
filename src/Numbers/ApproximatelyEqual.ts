/**
 * Check if two numbers are approximately the same to each other.
 * @param {number} v1 First number
 * @param {number} v2 Second number
 * @param {number} epsilon Difference to check by 
 * @returns {boolean}
 * @example ApproximatelyEqual(Math.PI / 2.0, 1.5708)
 */
export default function (v1: number, v2: number, epsilon = 0.001) {
  return Math.abs(v1 - v2) < epsilon;
}