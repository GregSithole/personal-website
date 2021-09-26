const express = require('express');
const path = require('path');

const app = express();

// Checking if the application is still active
app.get('/health', (req, res) => {
  return res.sendStatus(200);
});

app.use('/', express.static(path.resolve('./dist')));
app.use('/', function (req, res) {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(80, function () {
  console.log('Listening on port 80');
});
