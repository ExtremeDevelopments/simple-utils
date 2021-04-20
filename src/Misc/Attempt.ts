/**
 * Execute a function returning either the result or the caught error
 * @param {Function} fn 
 * @param {any} args 
 * @example var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
  }, '>_>');
  if (elements instanceof Error) elements = []; // elements = []
 */
export default function (fn, ...args) {
  try {
    return fn(...args)
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
}