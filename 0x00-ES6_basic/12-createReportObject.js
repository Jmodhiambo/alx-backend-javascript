// 12-createReportObject.js

export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // This stores all department data
    getNumberOfDepartments() {   // Method to return the number of departments
      return Object.keys(employeesList).length;
    }
  };
}
