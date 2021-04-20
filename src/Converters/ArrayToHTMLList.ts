/**
 * Convert an array of list items into a HTML list.
 * @param {Array<string>} arr 
 * @param {string} listID ID of the element to put list under DO NOT INCLUDE THE #
 * @example ArrayToHTMLList(['item 1', 'item 2'], 'myListID');
 */

export default function(arr: Array<any>, listID: string) {
  return (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
}