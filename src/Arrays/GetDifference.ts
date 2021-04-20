export default function(a: Array<any>, b: Array<any>) {

  const set = new Set(b);

  const difference = a.filter(x => !set.has(x))

  return difference;
}