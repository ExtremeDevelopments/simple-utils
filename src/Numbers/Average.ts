/**
 * 
 * @param nums Numbers to get average from
 * @returns {number}
 * @example Average(...[1, 2, 3]); // 2
   Average(1, 2, 3; // 2
 */
export default function (...nums) {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length
}