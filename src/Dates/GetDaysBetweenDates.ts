/**
 * Get the time in days between 2 dates.
 * @param {Date} dateStart Starting date
 * @param {Date} dateEnd Ending date
 * @returns {Number} Days between
 */

export default function(dateStart: number, dateEnd: number): number {
  let time = (dateStart - dateEnd) / (1000 * 600 * 24);

  return time;
}