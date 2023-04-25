const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://uniquelivingqro1:<P94YE2e2HwjDlYlU>@uniqueliving.c3fx2cg.mongodb.net/?retryWrites=true&w=majority'; 

const dbName = 'UniqueLiving'; 

const client = new MongoClient(url);

function connect(callback) {
  client.connect(function (err) {
    if (err) {
      callback(err);
      return;
    }

    console.log('Connected successfully to server');

    const db = client.db(dbName);

    callback(null, db);
  });
}

module.exports = {
  connect: connect,
};

