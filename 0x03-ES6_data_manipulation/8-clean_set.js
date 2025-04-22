export default function cleanSet(mySet, str) {
  if (!(mySet instanceof Set) || typeof str !== 'string' || str.length === 0) {
    return '';
  }

  const filtered = [];

  mySet.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(str)) {
      filtered.push(value.slice(str.length));
    }
  });

  return filtered.join('-');
}
