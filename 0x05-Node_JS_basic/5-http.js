const http = require('http');
const fs = require('fs'); // Move fs import before local imports

const databasePath = process.argv[2] || '';

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        res.end('Cannot load the database');
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

      res.write(`Number of students: ${total}\n`);
      for (const [field, names] of Object.entries(fields)) {
        res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
      }

      res.end();
    });
  } else {
    res.end('Invalid endpoint');
  }
});

app.listen(1245);

module.exports = app;
