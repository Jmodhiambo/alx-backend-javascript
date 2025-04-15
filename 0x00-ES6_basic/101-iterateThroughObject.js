// 101-iterateThroughObject.js

export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array and join the employee names with "|"
  return Array.from(reportWithIterator).join(' | ');
}
