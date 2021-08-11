export default function(arr: Array<any>, fn) {
  // @ts-expect-error
  return arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc:number, val:number) => acc + val, 0) / arr.length;
}