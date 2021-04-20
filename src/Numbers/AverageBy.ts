export function AverageBy(arr: Array<any>, fn) {
  return arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc:number, val:number) => acc + val, 0) / arr.length;
}