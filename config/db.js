const MongoClient = require('mongodb').MongoClient;

const url =`${process.env.URI}`; 

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

