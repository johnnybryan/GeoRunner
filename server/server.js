const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const PORT = 3000;

// app.get('/coordinates', (req, res))

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal server error');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`)); //listens on port 3000 -> http://localhost:3000/