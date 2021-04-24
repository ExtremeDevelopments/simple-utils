/**
 * Check if two dates are identical.
 * @param {Date} dateOne
 * @param {Date} dateTwo
 */

export default function(dateOne: Date, dateTwo: Date) {
  return dateOne.toTimeString() === dateTwo.toTimeString()
}