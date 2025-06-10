const fs = require('fs');

/**
 * Reads a CSV file and counts the number of students in each field.
 * @param {string} filePath - The path to the CSV file.
 */
function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split file content into lines and remove empty lines
    const lines = data.trim().split('\n').filter((line) => line);

    // Remove the header row
    lines.shift();

    // Get student count and categorize by field
    const studentsByField = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const studentData = line.split(',');
      if (studentData.length === 4) {
        const field = studentData[3];
        const firstname = studentData[0];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        totalStudents += 1;
      }
    });

    // Log the number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log students by field
    Object.keys(studentsByField).forEach((field) => {
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
