/**
 * Convert a value from degrees to radians.
 * @param {number} degree Degrees to convert
 * @returns {number}
 * @example degreesToRads(90.0); // ~1.5708
 */
export default function (degree: number): number {
  return (degree * Math.PI) / 180.0;
}