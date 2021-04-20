/**
 * Determine if runtime is in browser or not. Useful for avoiding errors with front-end modules on the server
 * @returns {boolean}
 */
export default function() {
  return ![typeof window, typeof document].includes('undefined')
}