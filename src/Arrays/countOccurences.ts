export default function (arr: Array<any>, val: any) {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}