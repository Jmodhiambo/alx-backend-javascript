// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  // Use a generator function to iterate through each department and its employees
  return (function* () {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee; // Yield each employee
      }
    }
  })();
}
