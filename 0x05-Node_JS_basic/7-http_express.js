const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const databasePath = process.argv[2] || ''; // Get database path from command line

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

      let output = `Number of students: ${total}\n`;
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(output);
    });
  });
}

// Route for "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for "/students"
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');

  try {
    const studentData = await countStudents(databasePath);
    res.end(studentData);
  } catch (error) {
    res.end(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
