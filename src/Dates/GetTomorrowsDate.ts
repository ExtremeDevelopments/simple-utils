/**
 * Get the exact date 24 hours ahead of time running function.
 */

export default function() {
  let date = new Date()
  date.setDate(date.getDate() + 1)
  return date.toISOString().split('T')[0];
}