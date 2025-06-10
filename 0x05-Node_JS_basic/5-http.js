const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2] || ''; // Get database file from command-line arguments

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(databasePath)
      .then(() => res.end())
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.end('Invalid endpoint');
  }
});

app.listen(1245);

module.exports = app;
