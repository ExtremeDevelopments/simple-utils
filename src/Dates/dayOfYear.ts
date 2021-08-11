/**
 * Get the exact day of the year from a Date object.
 * @param {Date} date Date to get exact day 
 * @returns {number}
 * @example dayOfYear(new Date());
*/
export default function (date: Date): number {
  // @ts-expect-error
  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}