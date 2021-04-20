/**
 * Determine if runtime is in browser or not. Useful for avoiding errors with front-end modules on the server
 * @returns {boolean}
 */
export default function(): boolean {
  if (window && document) return true
  else return false
}