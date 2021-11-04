// const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000'
const url = 'mongodb://127.0.0.1:27017/db';

const db = mongo.connect(url, (err, res) => {
  if (err) console.log('Failed to connect to ' + db);
  else console.log('Connected to ' + db, '+', res);
});

module.exports = db;