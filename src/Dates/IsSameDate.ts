/**
 * Check if two dates are identical.
 * @param {Date} dateOne 
 * @param {Date} dateTwo 
 */

export default function(dateOne, dateTwo) {
  return dateOne.toISOString() === dateTwo.toISOString()
}