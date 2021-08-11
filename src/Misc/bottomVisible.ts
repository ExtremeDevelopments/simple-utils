/**
 * Check wether the bottom of the document page is visible.
 * @returns {boolean}
 * @example BottomVisible(); //true
 */
export default function () {
  return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
}