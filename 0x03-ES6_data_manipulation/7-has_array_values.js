export default function hasValuesFromArray(mySet, arr) {
  if (!(mySet instanceof Set) || !Array.isArray(arr)) {
    return false;
  }

  return arr.every((value) => mySet.has(value));
}
