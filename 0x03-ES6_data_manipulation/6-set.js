export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    return new Set();
  }

  const ArrayToSet = new Set([...arr]);

  return ArrayToSet;
}
