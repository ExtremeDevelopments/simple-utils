export default function(date: Date) {
  const result = date.toTimeString().slice(0, 8);

  return result;
}