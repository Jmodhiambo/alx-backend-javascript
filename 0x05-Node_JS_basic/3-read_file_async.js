const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Exclude header

      const fields = {};
      let total = 0;

      for (const student of students) {
        const parts = student.split(',');
        const firstName = parts[0];
        const field = parts[parts.length - 1];

        if (firstName && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
          total += 1;
        }
      }

      console.log(`Number of students: ${total}`);
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
