/**
 * Delay the execution of a function until the current call stack is cleared.
 * @param {any} fn Provided function
 * @param {any} args Extra arguments.
 * @returns {void}
 * @example defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
 */
export default function (fn, ...args: any): void {
  setTimeout(fn, 1, ...args);
}